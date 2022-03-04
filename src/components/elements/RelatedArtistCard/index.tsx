import { getStyles } from './styles';
import { useAppDispatch, getSingleArtist, clearArtistsList } from 'redux-app';
import { Typography } from '@mui/material';


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
        <button
            className={classes.root}
            onClick={() => click(id)}>
            <img className={classes.img}
                src={img}
                alt="song-img" />
            <Typography variant='h5' className={classes.name}>{name}</Typography>
        </button>
    );
}