import { artistsApi, artistsSelector, useAppSelector, authSelector } from 'redux-app';
import { getStyles } from './styles';
import { RelatedArtistCard } from 'components';
import noImage from 'assets/no_image.jpg';


export const RelatedArtists = () => {
    const classes = getStyles();
    const { currentArtistId } = useAppSelector(artistsSelector);
    const { authToken } = useAppSelector(authSelector);

    const { data: relatedArtists } = artistsApi.useGetRelatedArtistsQuery({ token: authToken, artistId: currentArtistId })
    const adaptRelatedArtists = relatedArtists?.artists.slice(0, 5);

    if (!relatedArtists?.artists.length) return null

    return (
        <div className={classes.root}>
            <div>
                Related Artists
            </div>
            <div className={classes.relatedArtists}>
                {adaptRelatedArtists?.map(el =>
                    <RelatedArtistCard
                        key={el.name}
                        id={el.id}
                        img={el.images[0]?.url || noImage}
                        name={el.name}
                    />
                )}
            </div>
        </div>
    );
}