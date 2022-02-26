import { Tabs } from 'components';
import { useContext, useState } from 'react';
import { profileApi } from 'redux-app/profile';
import { getStyles } from './styles';
import { followedWrappertabs, timeValues } from '../constants';
import { ProfileSongCard } from '../ProfileSongCard';
import { AppContext } from 'context/context';


export const ListenedTracksWrapper = () => {

    const classes = getStyles();
    const { accessToken } = useContext(AppContext);
    const [timeRange, setTimeRange] = useState(timeValues[0]);

    const requestTimeRange = followedWrappertabs[timeRange]
    const { data: listenedTracks } = profileApi.useGetProfileListenedTracksQuery(
        { token: accessToken, timeRange: requestTimeRange }
    )

    return (
        <div className={classes.root}>
            <span className={classes.title}>Top listened songs</span>
            <Tabs
                values={timeValues}
                active={timeRange}
                setActive={setTimeRange}
                externalActiveStyles={classes.activetabs}
            />
            <div>
                {listenedTracks?.items.map((el, index) => (
                    <ProfileSongCard
                        key={index}
                        index={index + 1}
                        imgUrl={el.album.images[0].url || ''}
                        artists={el.artists}
                        name={el.name}
                        preview_url={el.preview_url}
                        link={el.uri}
                    />
                ))}
            </div>
        </div>
    );
}