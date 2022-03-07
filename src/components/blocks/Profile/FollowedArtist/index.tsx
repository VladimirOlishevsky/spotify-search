import { Typography } from '@mui/material';
import { Title } from 'components';
import { TITLE_VARIANT } from 'components/constants';
import { getStyles } from './styles';

interface IFollowedArtist {
    imgUrl: string,
    name: string,
    genres: string[],
    followers: number,
    index: number,
    link: string
}

export const FollowedArtist = ({
    imgUrl,
    name,
    genres,
    followers,
    index,
    link
}: IFollowedArtist) => {
    const classes = getStyles({ imgUrl });
    return (
        <a href={link} className={classes.artist}>
            <Typography variant='h5' className={classes.count}>
                {index}
            </Typography>
            <div className={classes.img} />
            <div className={classes.info}>
                <Title type={TITLE_VARIANT.profileCard} variant='h3' title={name} />
                <div className={classes.descriptionWrapper}>
                    <div className={classes.genres}>
                        <span>genres:</span>
                        {genres.map((el, index) => (
                            <span key={el} className={classes.descriptionText}>
                                {`${el}${index === genres.length - 1 ? '' : ','}`}
                            </span>
                        ))}
                    </div>
                    <div className={classes.genres}>
                        <span>
                            followers:
                        </span>
                        <span className={classes.descriptionText}>
                            {String(followers).replace(/(.)(?=(\d{3})+$)/g, '$1.')}
                        </span>
                    </div>
                </div>
            </div>
        </a>
    );
}