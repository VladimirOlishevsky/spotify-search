import { SongCard } from 'components';
import { artistsApi, artistsSelector, useAppSelector, setTrackIds } from 'redux-app';
import { useAppDispatch } from 'redux-app/store';
import { getStyles } from './styles';
import noImage from 'assets/no_image.jpg';
import { useContext, useEffect } from 'react';
import { AppContext } from 'context/context';


export const TopSongs = () => {
    const classes = getStyles();
    const dispatch = useAppDispatch();
    const { currentArtistId } = useAppSelector(artistsSelector);
    const { accessToken } = useContext(AppContext);

    const { data: topTracks } = artistsApi.useGetArtistTopTracksQuery({ token: accessToken, artistId: currentArtistId })
    const adaptTracks = topTracks?.tracks.slice(0, 5);

    const trackIds = adaptTracks?.map(el => el.id).join(',');
    useEffect(() => {
        trackIds && dispatch(setTrackIds(trackIds))
    },[trackIds, dispatch])

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