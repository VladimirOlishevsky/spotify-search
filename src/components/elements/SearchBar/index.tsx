import { SearchResults } from 'components';
import { AppContext } from 'context/context';
import { useContext, useEffect, useState } from 'react';
import { useAppDispatch } from 'redux-app';
import { artistsApi, getArtists } from 'redux-app/artists';
import { useDebounce } from 'utils';
import { getStyles } from './styles';

export const SearchBar = () => {
    const classes = getStyles();

    const dispatch = useAppDispatch();
    const { accessToken } = useContext(AppContext)
    const [searchState, setSearchState] = useState('');
    const intermediateValue = useDebounce(searchState, 500);
    const { data, isFetching } = artistsApi.useGetArtistsQuery({ token: accessToken, value: intermediateValue })
    
    useEffect(() => {
        if (data) {
            dispatch(getArtists(data));
        }
    }, [data, dispatch])

    return (
        <div className={classes.root}>
            <form className={classes.form} role="search">
                <input
                    onChange={(e) => setSearchState(e.currentTarget.value)}
                    value={searchState}
                    className={classes.input}
                    id="search"
                    type="search"
                    placeholder="Search..."
                    autoComplete="off" />
                <button className={classes.button} type="submit">Go</button>
            </form>
            {searchState && <SearchResults setSearchState={setSearchState} isFetching={isFetching} />}
        </div>
    );
}