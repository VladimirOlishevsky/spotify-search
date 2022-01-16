import { AlbumCard } from 'components/elements/AlbumCard';
import { artistsApi, artistsSelector, useAppSelector, authSelector, TopAlbumsItems, TopAlbumsValue } from 'redux-app';
import { getStyles } from './styles';
import noImage from 'assets/no_image.jpg';


export const TopAlbums = () => {
    const classes = getStyles();
    const { currentArtistId } = useAppSelector(artistsSelector);
    const { authToken } = useAppSelector(authSelector);

    const { data: album } = artistsApi.useGetArtistAlbumsQuery({ token: authToken, artistId: currentArtistId })
    const adaptAlbums = album?.items
        .filter(el => el.type === 'album')
        .reduce<TopAlbumsItems>(
            (acc, el) => {
                if (acc?.some(val => val.name === el.name)) {
                    return acc
                } else {
                    acc?.push(el);
                }
                return acc.slice(0, 5)
            }, [])

    if (!album?.items.length) return null

    return (
        <div className={classes.root}>
            <div>
                Popular albums
            </div>
            <div className={classes.albumsWrapper}>
                {adaptAlbums?.map(el =>
                    <AlbumCard
                        key={el.name}
                        img={el.images[0]?.url || noImage}
                        albumName={el.name}
                        albumDate={el.release_date}
                        urlToSpotify={el.uri}
                    />
                )}
            </div>
        </div>
    );
}