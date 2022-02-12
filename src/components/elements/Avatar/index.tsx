import { getStyles } from './styles';
import noImage from 'assets/no_image.jpg';

interface IAvatar {
    imgUrl: string,
}

export const Avatar = ({
    imgUrl
}: IAvatar) => {
    const classes = getStyles();

    return (
        <img
            className={classes.avatar}
            src={imgUrl || noImage}
            alt="artist-img" />
    );
}