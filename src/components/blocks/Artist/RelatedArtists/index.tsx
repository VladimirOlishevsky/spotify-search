import { artistsApi, artistsSelector, useAppSelector } from 'redux-app';
import { getStyles } from './styles';
import { RelatedArtistCard, Title } from 'components';
import noImage from 'assets/no_image.jpg';
import { useContext } from 'react';
import { AppContext } from 'context/context';


export const RelatedArtists = () => {

    const { currentArtistId } = useAppSelector(artistsSelector);
    const { accessToken, theme } = useContext(AppContext);
    const classes = getStyles({ theme });
    const { data: relatedArtists } = artistsApi.useGetRelatedArtistsQuery({ token: accessToken, artistId: currentArtistId })
    const adaptRelatedArtists = relatedArtists?.artists.slice(0, 5);

    if (!relatedArtists?.artists.length) return null

    return (
        <div className={classes.root}>
            <Title title='Related Artists' />
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