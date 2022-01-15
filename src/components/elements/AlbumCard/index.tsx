import { getStyles } from './styles';
import { Typography } from '@mui/material';
import dayjs from 'dayjs'

interface IAlbumCard {
    img: string,
    albumName: string,
    albumDate: string,
    urlToSpotify: string
}

export const AlbumCard = ({
    img,
    albumName,
    albumDate,
    urlToSpotify
}: IAlbumCard) => {
    const classes = getStyles();
    const date = dayjs(albumDate).year();
    
    return (
        <a target="_blank" rel="noreferrer" className={classes.root} href={urlToSpotify}>
            <img className={classes.img}
                src={img}
                alt="song-img" />
            <div className={classes.info}>
                <Typography className={classes.albumName}>{albumName}</Typography>
                <Typography>{`${date} • album`}</Typography>
            </div>
        </a>

    );
}