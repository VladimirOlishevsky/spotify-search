import { getStyles } from './styles';
import { Typography } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from 'context/context';

interface ISongCard {
    img: string,
    songName: string,
    songArtist: string[],
    urlToSpotify: string
}

export const SongCard = ({
    img,
    songName,
    songArtist,
    urlToSpotify
}: ISongCard) => {
    const { theme } = useContext(AppContext)
    const classes = getStyles({ theme });

    return (
        <div className={classes.root}>
            <div className={classes.info}>
                <img className={classes.img}
                    src={img}
                    alt="song-img" />
                <div className={classes.description}>
                    <Typography className={classes.songName}>
                        {songName}
                    </Typography>
                    <div className={classes.author}>
                        {songArtist.map(el => <Typography className={classes.authorName} key={el}>{el}</Typography>)}
                    </div>
                </div>
            </div>
            <button className={classes.button} onClick={() => window.open(urlToSpotify)}>
                Open on Spotify
            </button>
        </div>
    );
}