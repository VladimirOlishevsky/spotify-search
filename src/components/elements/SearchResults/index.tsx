import { useAppDispatch, useAppSelector } from 'redux-app';
import { artistsSelector, getSingleArtist } from 'redux-app/artists';
import { Loader } from '../Loader';
import { getStyles } from './styles';

interface ISearchResults {
    isFetching: boolean
}

export const SearchResults = ({
    isFetching
}: ISearchResults) => {
    const classes = getStyles();
    const dispatch = useAppDispatch();

    const { artists } = useAppSelector(artistsSelector);
    console.log('artists', artists)

    return (
        <div className={classes.root}>
            {isFetching
                ? <Loader />
                : <div className={classes.searchResults}>
                    {artists.length && !isFetching
                        ? artists.map(el => (
                            <button
                                className={classes.searchItems}
                                onClick={() => dispatch(getSingleArtist(el.id))}
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