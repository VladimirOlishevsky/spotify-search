import { artistsApi, artistsSelector, useAppSelector, TopAlbumsItems } from 'redux-app';
import { getStyles } from './styles';
import noImage from 'assets/no_image.jpg';
import { useContext } from 'react';
import { AppContext } from 'context/context';
import { Title, AlbumCard } from 'components';
import { TITLE_VARIANT } from 'components/constants';


export const TopAlbums = () => {

    const { currentArtistId } = useAppSelector(artistsSelector);
    const { theme } = useContext(AppContext);
    const classes = getStyles({ theme });
    const { data: album } = artistsApi.useGetArtistAlbumsQuery({ artistId: currentArtistId })
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
            <Title type={TITLE_VARIANT.search} variant='h1' title='Popular albums' />
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