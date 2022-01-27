import { SongCard } from 'components';
import { artistsApi, artistsSelector, useAppSelector, authSelector, setTrackIds } from 'redux-app';
import { useAppDispatch } from 'redux-app/store';
import { getStyles } from './styles';
import noImage from 'assets/no_image.jpg';
import { useEffect } from 'react';


export const TopSongs = () => {
    const classes = getStyles();
    const dispatch = useAppDispatch();
    const { currentArtistId } = useAppSelector(artistsSelector);
    const { authToken } = useAppSelector(authSelector);

    const { data: topTracks } = artistsApi.useGetArtistTopTracksQuery({ token: authToken, artistId: currentArtistId })
    const adaptTracks = topTracks?.tracks.slice(0, 5);

    const trackIds = adaptTracks?.map(el => el.id);
    console.log(trackIds);

    //7sMBvZCSUl99bJLXZaLa0b,1LPSkqVhWVRUkKE03YUkpB,71l8BEtJPXXlWbV6hhTHWK,7HEWQj82REyDOKMAAlB9pc,21afd9hCjpQ6lE5DPbcPHP
    useEffect(() => {
        dispatch(setTrackIds(trackIds || []))
    },[])

    if(!topTracks?.tracks.length) return null

    return (
        <div className={classes.root}>
            <div>
                Popular tracks
            </div>
            <div className={classes.songsWrapper}>
                {adaptTracks?.map(el =>
                    <SongCard
                        key={el.name}
                        img={el.album.images[0]?.url || noImage}
                        songName={el.name}
                        songArtist={el.album.artists.map(el => el.name)}
                        urlToSpotify={el.external_urls.spotify}
                    />
                )}
            </div>
        </div>
    );
}