import { artistsApi, artistsSelector, useAppSelector, authSelector } from 'redux-app';
import { getStyles } from './styles';


export const RelatedArtists = () => {
    const classes = getStyles();
    const { currentArtistId } = useAppSelector(artistsSelector);
    const { authToken } = useAppSelector(authSelector);

    const { data: relatedArtists } = artistsApi.useGetRelatedArtistsQuery({ token: authToken, artistId: currentArtistId })
    const adaptRelatedArtists = relatedArtists?.artists.slice(0, 5);
    console.log('relatedArtists', adaptRelatedArtists)

    return (
        <div className={classes.root}>
            <div>
               Related Artists
            </div>
            {/* <div className={classes.albumsWrapper}>
                {adaptAlbums?.map(el =>
                    <AlbumCard
                        img={el.images[0].url}
                        albumName={el.name}
                        albumDate={el.release_date}
                        urlToSpotify={el.uri}
                    />
                )}
            </div> */}
        </div>
    );
}