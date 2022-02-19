import { Tabs } from 'components';
import { useState } from 'react';
import { useAppSelector, authSelector } from 'redux-app';
import { profileApi } from 'redux-app/profile';
import { FollowedArtist } from '../FollowedArtist';
import { followedWrappertabs, timeValues } from '../constants';
import { getStyles } from './styles';

export const FollowedArtistsWrapper = () => {

    const classes = getStyles();
    const { authToken } = useAppSelector(authSelector);
    const [timeRange, setTimeRange] = useState(timeValues[0]);
    const requestTimeRange = followedWrappertabs[timeRange]
    const token = 'BQAU9y3gwWJ_pww-YN0dckbkaWM-ewV42ysLK8QImWZ-smgZAXqoG4K1SHK8p7n9LgVDO6roYEg278i5oWuWeqNPPj9HgBPRSDo6lBTelbWiIlLQA6496N59kECiRetjq7ZZQOjDUSpz6GGwO1aDgzOtY8OJWvXmM3ub55tRv4HaDD0mwoc_WSE2oSKoPLEFEi_LzQqpOQnFOlD8omJSS-jteYg8UpRkcf5_lg'

    const { data: followedArtists } = profileApi.useGetProfileFollowedArtistsQuery(
        { token: token, timeRange: requestTimeRange }
    )

    return (
        <div className={classes.root}>
            <span className={classes.title}>Top listened artists</span>

            <Tabs
                values={timeValues}
                active={timeRange}
                setActive={setTimeRange}
                externalClasses={classes.active}
            />
            <div className={classes.artistsWrapper}>
                {followedArtists?.items.map((el, index) => (
                    <FollowedArtist
                        key={el.name}
                        name={el.name}
                        imgUrl={el.images[0].url}
                        followers={el.followers.total}
                        genres={el.genres}
                        index={index + 1}
                        link={el.uri}
                    />
                ))}
            </div>
        </div>
    );
}