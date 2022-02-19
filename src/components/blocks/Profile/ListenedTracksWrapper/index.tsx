import { Tabs } from 'components';
import { useState } from 'react';
import { useAppSelector, authSelector } from 'redux-app';
import { profileApi } from 'redux-app/profile';
import { getStyles } from './styles';
import { followedWrappertabs, timeValues } from '../constants';
import { ProfileSongCard } from '../ProfileSongCard';


export const ListenedTracksWrapper = () => {

    const classes = getStyles();
    const { authToken } = useAppSelector(authSelector);
    const [timeRange, setTimeRange] = useState(timeValues[0]);

    const requestTimeRange = followedWrappertabs[timeRange]
    const token = 'BQD9KyGQuJw7AL0XPKUIC9kCfAsUzn_dSa3V-UUcY8KBQQDK1qHucacjYeBsQhW7rKVuwwkZSoduOZHI6YGbjU_zgxh1jgq3iCNaxIU7kejq5YpK10NX2ZVHFLIe9yvJlhn6FeR8dvmpjyTwBXK83RP9KAed_zqXVNIXCC0NEHLYrYGhV_kZUMIvS-HPJFF9roLVuvD59MCUjJxzbVgzAjZr_DIA7o7IHYPN8A'

    const { data: listenedTracks } = profileApi.useGetProfileListenedTracksQuery(
        { token: token, timeRange: requestTimeRange }
    )

    return (
        <div className={classes.root}>
            <span className={classes.title}>Top listened songs</span>
            <Tabs
                values={timeValues}
                active={timeRange}
                setActive={setTimeRange}
                externalClasses={classes.activetabs}
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