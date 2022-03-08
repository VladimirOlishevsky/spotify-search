import { Tabs, Title } from 'components';
import { useState } from 'react';
import { profileApi } from 'redux-app/profile';
import { getStyles } from './styles';
import { followedWrappertabs, timeValues } from '../constants';
import { ProfileSongCard } from '../ProfileSongCard';
import { TITLE_VARIANT } from 'components/constants';


export const ListenedTracksWrapper = () => {

    const classes = getStyles();
    const [timeRange, setTimeRange] = useState(timeValues[0]);

    const requestTimeRange = followedWrappertabs[timeRange]
    const { data: listenedTracks } = profileApi.useGetProfileListenedTracksQuery(
        { timeRange: requestTimeRange }
    )

    return (
        <div className={classes.root}>
            <Title type={TITLE_VARIANT.profile} variant='h1' title='Top listened songs' />
            <Tabs
                values={timeValues}
                active={timeRange}
                setActive={setTimeRange}
                externalTabStyles={classes.tabStyles}
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