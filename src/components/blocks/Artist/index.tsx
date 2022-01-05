import { SearchBar } from 'components';
import { useEffect } from 'react';
import { artistsApi, artistsSelector, useAppDispatch, useAppSelector, authSelector } from 'redux-app';
import { getStyles } from './styles';
import { authApi, updateAccessToken } from 'redux-app/auth';

//spotify:track:7rvEwAILTqxBpdIyUifkE8 - go to spotify 

export const Artist = () => {
    const classes = getStyles();

    const dispatch = useAppDispatch(); // delete
    const { currentArtistId } = useAppSelector(artistsSelector);
    const { authToken } = useAppSelector(authSelector);

    const { data: artitst } = artistsApi.useGetSingleArtistQuery({ token: authToken, artistId: currentArtistId })
    const { data: album } = artistsApi.useGetArtistAlbumsQuery({ token: authToken, artistId: currentArtistId })
    const { data: topTracks } = artistsApi.useGetArtistTopTracksQuery({ token: authToken, artistId: currentArtistId })
    const { data: relatedArtists } = artistsApi.useGetRelatedArtistsQuery({ token: authToken, artistId: currentArtistId })
    console.log('artitst', artitst)
    console.log('album', album)
    console.log('topTracks', topTracks)
    console.log('relatedArtists', relatedArtists)
    
    // const accessTokenQueryResult = authApi.endpoints.getAccessToken.useQuery('');

    // const { data } = accessTokenQueryResult;
    // const accessToken = data?.access_token;

    // useEffect(() => {
    //     if (!accessToken) return;
    //     dispatch(updateAccessToken(accessToken));
    // }, [dispatch, accessToken]);

    return (
        <div></div>
    );
}