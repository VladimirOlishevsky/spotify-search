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
                <Typography variant='h5' className={classes.albumName}>{albumName}</Typography>
                <Typography variant='h5' className={classes.albumDate}>{`${date} • album`}</Typography>
            </div>
        </a>

    );
}