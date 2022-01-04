import { useState } from 'react';
import { authSelector, useAppSelector } from 'redux-app';
import { artistsSelector, artistsApi, apiPartnerSpotify } from 'redux-app/artists';
import { Loader } from '../Loader';
// import { getStyles } from './styles';

interface ISearchItems {
    id: string,
    name: string
}

export const SearchItems = ({
    id,
    name
}: ISearchItems) => {
    console.log('here')
    // const classes = getStyles();
    const [artId, setArtId] = useState('')
    // const { artists } = useAppSelector(artistsSelector);
    // const { authToken } = useAppSelector(authSelector);
    // console.log('artists', artists)

    // if(!artists.length) return null

    // const setAndSend = (userId: string) => {
    //     setId(userId);
    //     artistsApi.useGetSingleArtistQuery({ token: authToken, artistId: id })
    // }

    const { data } = apiPartnerSpotify.useGetArtistsLalalaQuery({ artistId: artId })
    console.log('data', data)

    return (
        <button
            onClick={() => setArtId(id)}
            key={id}
            >
            {name}
        </button>
    );
}