import { useAppSelector } from 'redux-app';
import { artistsSelector } from 'redux-app/artists';
import { Loader } from '../Loader';
import { getStyles } from './styles';

interface ISearchResults {
    isFetching: boolean
}

export const SearchResults = ({
    isFetching
}: ISearchResults) => {
    const classes = getStyles();
    const { artists } = useAppSelector(artistsSelector);
    console.log('artists', artists)

    return (
        <div className={classes.root}>
            {isFetching
                ? <Loader />
                : <div className={classes.searchResults}>
                    {artists.length && !isFetching
                        ? artists.map(el =>
                            <div key={el.name} className={classes.searchItems}>
                                {el.name}
                            </div>)
                        : <div>no results found :(</div>}
                </div>
            }
        </div>
    );
}