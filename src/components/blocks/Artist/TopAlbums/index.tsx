import { AlbumCard } from 'components/elements/AlbumCard';
import { artistsApi, artistsSelector, useAppSelector, authSelector } from 'redux-app';
import { getStyles } from './styles';


export const TopAlbums = () => {
    const classes = getStyles();
    const { currentArtistId } = useAppSelector(artistsSelector);
    const { authToken } = useAppSelector(authSelector);

    const { data: album } = artistsApi.useGetArtistAlbumsQuery({ token: authToken, artistId: currentArtistId })
    const adaptAlbums = album?.items.filter(el => el.type === 'album').slice(0, 5)

    return (
        <div className={classes.root}>
            <div>
                Popular albums
            </div>
            <div className={classes.songsWrapper}>
                {adaptAlbums?.map(el =>
                    <AlbumCard
                        img={el.images[0].url}
                        albumName={el.name}
                        albumDate={el.release_date}
                        urlToSpotify={el.uri}
                    />
                )}
            </div>
        </div>
    );
}