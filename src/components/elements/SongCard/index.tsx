import { getStyles } from './styles';
import { Typography } from '@mui/material';

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
    const classes = getStyles();

    return (
        <div className={classes.root}>
            <div className={classes.info}>
                <img className={classes.img}
                    src={img}
                    alt="song-img" />
                <div className={classes.description}>
                    <Typography variant='h5' className={classes.songName}>
                        {songName}
                    </Typography>
                    <div className={classes.author}>
                        {songArtist.map((el, index) => (
                            <Typography
                                key={el}
                                variant='h5'
                                className={classes.authorName}
                            >
                                {`${el}${index === songArtist.length - 1 ? '' : ','}`}
                            </Typography>
                        ))}
                    </div>
                </div>
            </div>
            <button className={classes.button} onClick={() => window.open(urlToSpotify)}>
                Open on Spotify
            </button>
        </div>
    );
}