import { Tabs } from 'components';
import { useState } from 'react';
import { useAppSelector, authSelector } from 'redux-app';
import { PROFILE_TOP_REQUEST } from 'redux-app/constants';
import { profileApi } from 'redux-app/profile';
import { FollowedArtist } from '../FollowedArtist';
import { followedWrappertabs, timeValues } from './constants';
import { getStyles } from './styles';

export const FollowedArtistsWrapper = () => {

    const classes = getStyles();
    const { authToken } = useAppSelector(authSelector);
    const [timeRange, setTimeRange] = useState(timeValues[0]);

    const requestTimeRange = followedWrappertabs[timeRange]
    console.log('active', followedWrappertabs[timeRange])

    // console.log('1111111', authToken)
    const token = 'BQCRwb-Wu9dRNy7hO2dAWQU-4fdmvBDd0JYXGI_Oe-Y9GCGYjLB2fQNsT139tzt7z4XG-LcRF1BkqVNFuirrPOvcyqj0CcXAZWXh9u9z4sY5k1804jmzZxiDWXaepY3zpKf5s0JUWgCzV_GAVE9PG32c06BdH5O_dEfr57O0gWEa_-6Wmym_tmwTIB3WpJ96rUv_FlG-lxtfDwDvZVhnGvA'

    const { data: followedArtists } = profileApi.useGetProfileFollowedArtistsQuery(
        { token: token, requestType: PROFILE_TOP_REQUEST.artists, timeRange: requestTimeRange }
    )

    console.log('followedArtists', followedArtists)

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