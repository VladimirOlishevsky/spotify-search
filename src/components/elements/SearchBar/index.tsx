import { SearchResults } from 'components';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux-app';
import { artistsApi, getArtists } from 'redux-app/artists';
import { authSelector } from 'redux-app/auth';
import { useDebounce } from 'utils';
import { getStyles } from './styles';

export const SearchBar = () => {
    const classes = getStyles();

    const dispatch = useAppDispatch();
    const { authToken } = useAppSelector(authSelector);
    // const { artists } = useAppSelector(artistsSelector);


    const [searchState, setSearchState] = useState('');
    const intermediateValue = useDebounce(searchState, 500);
    const { data, isFetching } = artistsApi.useGetArtistsQuery({ token: authToken, value: intermediateValue })
    

    useEffect(() => {
        if (data) {
            dispatch(getArtists(data));
        }
    }, [data, dispatch])

    return (
        <div className={classes.root}>
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
            {searchState && <SearchResults isFetching={isFetching} />}
        </div>
    );
}