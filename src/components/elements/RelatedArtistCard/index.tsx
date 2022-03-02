import { getStyles } from './styles';
import { useAppDispatch, getSingleArtist, clearArtistsList } from 'redux-app';
import { useContext } from 'react';
import { AppContext } from 'context/context';


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
    const{ theme } = useContext(AppContext)
    const classes = getStyles({ theme });

    const dispatch = useAppDispatch();
    const click = (value: string) => {
        dispatch(getSingleArtist(value));
        dispatch(clearArtistsList())
    }

    return (
        <button
            className={classes.root}
            onClick={() => click(id)}>
            <img className={classes.img}
                src={img}
                alt="song-img" />
            <span className={classes.name}>{name}</span>
        </button>
    );
}