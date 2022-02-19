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

export const ListenedTrack = ({
    imgUrl,
    artists,
    name,
    preview_url,
    link,
    index,
}: IListenedTrack) => {
    const classes = getStyles({ imgUrl });
    return (
        <a href={link} className={classes.root}>
            <span>
                {index}
            </span>
            <div className={classes.img} />
            <div className={classes.info}>
                <span className={classes.name}>{name}</span>
                <div className={classes.descriptionWrapper}>
                    <div className={classes.genres}>
                        {artists.map((el, index) => (
                            <span key={el.id} className={classes.descriptionText}>
                                {`${el.name}${index === artists.length - 1 ? '' : ','}`}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                {/* <iframe src="https://open.spotify.com/embed?uri=https://open.spotify.com/track/7rvEwAILTqxBpdIyUifkE8"
                     height="80" frameBorder="0" allowTransparency={true}></iframe> */}
                <audio controls={true} autoPlay={false}>
                    <source src={preview_url} type="audio/mpeg" />
                    
                </audio>
            </div>
        </a>
    );
}
 {/* <iframe src="https://open.spotify.com/embed?uri=https://open.spotify.com/track/7rvEwAILTqxBpdIyUifkE8"
                     height="80" frameBorder="0" allowTransparency={true}></iframe> */}