import { SongCard } from 'components';
import { artistsApi, artistsSelector, useAppSelector, authSelector } from 'redux-app';
import { getStyles } from './styles';


export const TopSongs = () => {
    const classes = getStyles();
    const { currentArtistId } = useAppSelector(artistsSelector);
    const { authToken } = useAppSelector(authSelector);

    const { data: topTracks } = artistsApi.useGetArtistTopTracksQuery({ token: authToken, artistId: currentArtistId })
    const adaptTracks = topTracks?.tracks.slice(0, 5)

    return (
        <div className={classes.root}>
            <div>
                Popular tracks
            </div>
            <div className={classes.songsWrapper}>
                {adaptTracks?.map(el =>
                    <SongCard
                        img={el.album.images[0].url}
                        songName={el.name}
                        songArtist={el.album.artists.map(el => el.name)}
                        urlToSpotify={el.external_urls.spotify}
                    />
                )}
            </div>
        </div>
    );
}