import { Box } from '@mui/material';
import { getStyles } from './styles';

interface IListenedTrack {
    imgUrl: string,
    artists: {
        id: string,
        name: string,
        uri: string,
    }[],
    name: string,
    preview_url: string,
    link: string,
    index: number,
}

export const ProfileSongCard = ({
    imgUrl,
    artists,
    name,
    preview_url,
    link,
    index,
}: IListenedTrack) => {
    const classes = getStyles({ imgUrl });
    return (
        <Box onClick={() => window.location.assign(link)} className={classes.root}>
            <span className={classes.index}>
                {index}
            </span>
            <div className={classes.img} />

            <div className={classes.infoWrapper}>
                <div className={classes.info}>
                    <span className={classes.name}>{name}</span>
                    <div className={classes.descriptionWrapper}>
                        <div className={classes.singers}>
                            {artists.map((el, index) => (
                                <span key={el.id} className={classes.descriptionText}>
                                    <a className={classes.singerLink} onClick={() => { }}>
                                        {`${el.name}${index === artists.length - 1 ? '' : ','}`}
                                    </a>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <audio controls={true} autoPlay={false}>
                    <source src={preview_url} type="audio/mpeg" />
                </audio>
            </div>
        </Box>
    );
}