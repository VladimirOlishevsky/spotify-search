import { useEffect, useState } from 'react';
import { appSelector, useAppDispatch, useAppSelector } from 'redux-app';
import { artistsApi, artistsSelector, getArtists } from 'redux-app/artists';
import { authSelector } from 'redux-app/auth';
import { useDebounce } from 'utils';
import { getStyles } from './styles';

export const SearchBar = () => {
    const classes = getStyles();

    const dispatch = useAppDispatch();
    const { authToken } = useAppSelector(authSelector);
    const { artists } = useAppSelector(artistsSelector)

    const [searchState, setSearchState] = useState('');
    const intermediateValue = useDebounce(searchState, 500);

    const artistsResult = artistsApi.endpoints.getArtists.useQuery({ token: authToken, value: intermediateValue });
    const { data } = artistsResult;
    console.log('fff', artists)
    console.log('searchState', searchState)
    // dispatch(getArtists(data))



    // console.log('intermediateValue', intermediateValue)

    useEffect(() => {
        if (intermediateValue) {
            dispatch(getArtists(data));
        }
    }, [dispatch, data])

    return (
        <div>
            <form className={classes.form} role="search">
                <label className={classes.label} htmlFor="search">Search for stuff</label>
                <input
                    onChange={(e) => setSearchState(e.currentTarget.value)}
                    className={classes.input}
                    id="search"
                    type="search"
                    placeholder="Search..."
                    autoComplete="off" />
                <button className={classes.button} type="submit">Go</button>
            </form>
            {searchState &&
                <div style={{ display: 'flex', flexDirection: 'column', borderRadius: 8, backgroundColor: 'lightcoral' }}>
                    {artists.map(el => <div>
                        {el.name}
                    </div>)}
                </div>}
        </div>
    );
}