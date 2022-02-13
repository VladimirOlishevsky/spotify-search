import { getStyles } from './styles';

interface IFollowedArtist {
    imgUrl: string,
    name: string,
    genres: string[],
    followers: number
}

export const FollowedArtist = ({
    imgUrl,
    name,
    genres,
    followers
}: IFollowedArtist) => {

    const classes = getStyles({ imgUrl });

    return (
        <a className={classes.artist}>
            <div className={classes.img} />
            <div className={classes.info}>
                <span>{name}</span>
                <span>{followers}</span>
            </div>
        </a>
    );
}