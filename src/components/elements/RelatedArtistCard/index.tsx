import { getStyles } from './styles';

interface IRelatedArtistCard {
    img: string,
    name: string,
    url: string
}

export const RelatedArtistCard = ({
    img,
    name,
    url
}: IRelatedArtistCard) => {
    const classes = getStyles();

    return (
        <a target='_blank' rel='noreferrer' href={url} className={classes.root}>
            <img className={classes.img}
                src={img}
                alt="song-img" />
            <span>{name}</span>
        </a>
    );
}