import { Box, Typography } from '@mui/material';
import { Title } from 'components';
import { TITLE_VARIANT } from 'components/constants';
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
            <Typography variant='h5' className={classes.count}>
                {index}
            </Typography>
            <div className={classes.img} />

            <div className={classes.infoWrapper}>
                <div className={classes.info}>
                    <Title type={TITLE_VARIANT.profileCard} variant='h3' title={name} />
                    <div className={classes.descriptionWrapper}>
                        <div className={classes.singers}>
                            {artists.map((el, index) => (
                                <span key={el.id} className={classes.descriptionText}>
                                    {`${el.name}${index === artists.length - 1 ? '' : ','}`}
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