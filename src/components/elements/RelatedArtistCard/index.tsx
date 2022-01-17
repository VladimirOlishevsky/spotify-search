import { getStyles } from './styles';
import { useAppDispatch, getSingleArtist, clearArtistsList } from 'redux-app';


interface IRelatedArtistCard {
    img: string,
    name: string,
    id: string
}

export const RelatedArtistCard = ({
    img,
    name,
    id
}: IRelatedArtistCard) => {
    const classes = getStyles();

    const dispatch = useAppDispatch();
    const click = (value: string) => {
        dispatch(getSingleArtist(value));
        dispatch(clearArtistsList())
    }

    return (
        <a
            rel='noreferrer'
            className={classes.root}
            onClick={() => click(id)}>
            <img className={classes.img}
                src={img}
                alt="song-img" />
            <span>{name}</span>
        </a>
    );
}