import { profileApi } from 'redux-app/profile';
import { getStyles } from './styles';
import { ProfileSongCard } from '../ProfileSongCard';
import { useContext } from 'react';
import { AppContext } from 'context/context';


export const RecentlyPlayedWrapper = () => {

    const classes = getStyles();
    const { accessToken } = useContext(AppContext);

    const { data: recentlyPlayed } = profileApi.useGetRecentlyPlayingTracksQuery(
        { token: accessToken }
    )

    const data = recentlyPlayed?.items.flat()
    console.log('data', data)

    return (
        <div className={classes.root}>
            <span className={classes.title}>Last Recently Played Songs</span>
            <div>
                {data?.map((el, index) => (
                    <ProfileSongCard
                        key={index}
                        index={index + 1}
                        imgUrl={el.track.album.images[0].url || ''}
                        artists={el.track.artists}
                        name={el.track.name}
                        preview_url={el.track.preview_url}
                        link={el.track.uri}
                    />
                ))}
            </div>
        </div>
    );
}