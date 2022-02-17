import { Tabs } from 'components';
import { useState } from 'react';
import { useAppSelector, authSelector } from 'redux-app';
import { PROFILE_TOP_REQUEST, TIME_RANGE } from 'redux-app/constants';
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
    const token = 'BQARX0ANC1TWkjSZF5CF7H2QWkKQaV0D_FyTZB8GfkXBY_WykeUYkW8IAVedQGB-AKa7DS7SkHWb5Xe4yU9iECmCRKbHUZ7GgobsDorYoJtQZ42H-qP__OH6SaL1FLOx8iAIdVSVpC3rcaH655TDrCdEqON4-5ngrK0diB9Za6E-v5azGw6yQbFHhIN-TmKz5b57PJMO'

    const { data: followedArtists } = profileApi.useGetTopFromProfileQuery(
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