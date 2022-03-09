import { SongCard, Title } from 'components';
import { artistsApi, artistsSelector, useAppSelector, setTrackIds } from 'redux-app';
import { useAppDispatch } from 'redux-app/store';
import { getStyles } from './styles';
import noImage from 'assets/no_image.jpg';
import { useContext, useEffect } from 'react';
import { AppContext } from 'context/context';
import { TITLE_VARIANT } from 'components/constants';


export const TopSongs = () => {

    const dispatch = useAppDispatch();
    const { currentArtistId } = useAppSelector(artistsSelector);
    const { theme } = useContext(AppContext);
    const classes = getStyles({ theme });
    const { data: topTracks } = artistsApi.useGetArtistTopTracksQuery({ artistId: currentArtistId })
    const adaptTracks = topTracks?.tracks.slice(0, 5);

    const trackIds = adaptTracks?.map(el => el.id).join(',');
    useEffect(() => {
        trackIds && dispatch(setTrackIds(trackIds))
    }, [trackIds, dispatch])

    if (!topTracks?.tracks.length) return null

    return (
        <div className={classes.root}>
            <Title type={TITLE_VARIANT.search} variant='h1' title='Popular tracks' />
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