import { useState } from 'react';
import { authSelector, useAppSelector } from 'redux-app';
import { artistsSelector, artistsApi, apiPartnerSpotify } from 'redux-app/artists';
import { Loader } from '../Loader';
import { SearchItems } from '../SearchItem';
import { getStyles } from './styles';

interface ISearchResults {
    isFetching: boolean
}

export const SearchResults = ({
    isFetching
}: ISearchResults) => {
    const classes = getStyles();
    const [id, setId] = useState('')
    const { artists } = useAppSelector(artistsSelector);
    const { authToken } = useAppSelector(authSelector);
    console.log('artists', artists)

    // if(!artists.length) return null

    // const setAndSend = (userId: string) => {
    //     setId(userId);
    //     artistsApi.useGetSingleArtistQuery({ token: authToken, artistId: id })
    // }

    // const { data } = apiPartnerSpotify.useGetArtistsLalalaQuery({ token: authToken, artistId: id || '' })
    // console.log('data', data)

    return (
        <div className={classes.root}>
            {isFetching
                ? <Loader />
                : <div className={classes.searchResults}>
                    {artists.length && !isFetching
                        ? artists.map(el => <SearchItems id={el.id} name={el.name}/>)
                        : <div>no results found :(</div>}
                </div>
            }
        </div>
    );
}