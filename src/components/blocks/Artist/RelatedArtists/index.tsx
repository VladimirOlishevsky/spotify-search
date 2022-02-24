import { artistsApi, artistsSelector, useAppSelector } from 'redux-app';
import { getStyles } from './styles';
import { RelatedArtistCard } from 'components';
import noImage from 'assets/no_image.jpg';
import { useContext } from 'react';
import { AppContext } from 'context/context';


export const RelatedArtists = () => {
    const classes = getStyles();
    const { currentArtistId } = useAppSelector(artistsSelector);
    const { accessToken } = useContext(AppContext)

    const { data: relatedArtists } = artistsApi.useGetRelatedArtistsQuery({ token: accessToken, artistId: currentArtistId })
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