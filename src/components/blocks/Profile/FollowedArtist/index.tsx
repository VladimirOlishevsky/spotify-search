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
            <span>
                {index}
            </span>
            <div className={classes.img} />
            <div className={classes.info}>
                <span className={classes.name}>{name}</span>
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