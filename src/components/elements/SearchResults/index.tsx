import { useAppDispatch, useAppSelector } from 'redux-app';
import { artistsSelector, clearArtistsList, getSingleArtist } from 'redux-app/artists';
import { Loader } from '../Loader';
import { getStyles } from './styles';

interface ISearchResults {
    isFetching: boolean,
    setSearchState: React.Dispatch<React.SetStateAction<string>>
}

export const SearchResults = ({
    isFetching,
    setSearchState
}: ISearchResults) => {
    const classes = getStyles();
    const dispatch = useAppDispatch();

    const { artists } = useAppSelector(artistsSelector);

    const click = (value: string) => {
        dispatch(getSingleArtist(value));
        dispatch(clearArtistsList())
        setSearchState('');
    }

    return (
        <div className={classes.root}>
            {isFetching
                ? <Loader />
                : <div className={classes.searchResults}>
                    {artists.length && !isFetching
                        ? artists.map(el => (
                            <button
                                className={classes.searchItems}
                                onClick={() => click(el.id)}
                                key={el.id}
                            >
                                {el.name}
                            </button>))
                        : <div>no results found :(</div>}
                </div>
            }
        </div>
    );
}