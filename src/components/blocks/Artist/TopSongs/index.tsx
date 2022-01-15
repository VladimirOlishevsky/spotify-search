import { SongCard } from 'components';
import { artistsApi, artistsSelector, useAppSelector, authSelector } from 'redux-app';
import { getStyles } from './styles';
import noImage from 'assets/no_image.jpg';


export const TopSongs = () => {
    const classes = getStyles();
    const { currentArtistId } = useAppSelector(artistsSelector);
    const { authToken } = useAppSelector(authSelector);

    const { data: topTracks } = artistsApi.useGetArtistTopTracksQuery({ token: authToken, artistId: currentArtistId })
    const adaptTracks = topTracks?.tracks.slice(0, 5);
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