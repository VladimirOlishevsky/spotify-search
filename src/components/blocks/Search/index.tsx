import { SearchResults } from 'components';
import { useEffect, useState } from 'react';
import { artistsApi, getArtists, useAppDispatch } from 'redux-app';
import { useDebounce } from 'utils';
import { getStyles } from './styles';


export const Search = () => {

    const classes = getStyles();

    const dispatch = useAppDispatch();
    const [searchState, setSearchState] = useState('');
    const intermediateValue = useDebounce(searchState, 500);
    const { data, isFetching } = artistsApi.useGetArtistsQuery({ value: intermediateValue })

    useEffect(() => {
        if (data) {
            dispatch(getArtists(data));
        }
    }, [data, dispatch])

    return (
        <div className={classes.searchComponent}>
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
        </div>
    )
}
