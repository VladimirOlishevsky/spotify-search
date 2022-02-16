import { Tabs } from 'components';
import { useState } from 'react';
import { useAppSelector, authSelector } from 'redux-app';
import { PROFILE_TOP_REQUEST, TIME_RANGE } from 'redux-app/constants';
import { profileApi } from 'redux-app/profile';
import { FollowedArtist } from '../FollowedArtist';
import { getStyles } from './styles';

export const FollowedArtistsWrapper = () => {

    const classes = getStyles();
    const { authToken } = useAppSelector(authSelector);
    const [timeRange, setTimeRange] = useState(TIME_RANGE.longTerm)

    // console.log('1111111', authToken)
    const token = 'BQC9Ehu94FFZL7qLAZdMcwvBvFUcSCJxQZQBjb3C9NPCRoivs68urgME-CZZNV3LV5dUVNT5wnQ0vw3zT5nLMBgRuL3suFGl4g3qxy-4CcShd2sdJCdWAZmmCYPLwhrGNbAtPp9W4JI9P4krbPrHV8rxNbrHtpWQv2NNh4bwJNjsS45L7YkhRGzT6h87y2LsfG9xmiuJbBA9N4oxDw47NjwjGxoatypN7A'

    const { data: followedArtists } = profileApi.useGetTopFromProfileQuery(
        { token: token, requestType: PROFILE_TOP_REQUEST.artists, timeRange: TIME_RANGE.longTerm }
    )

    console.log('followedArtists', followedArtists)

    return (
        <div className={classes.root}>
            <span className={classes.title}>Top listened artists</span>

            <Tabs
                values={[TIME_RANGE.longTerm, TIME_RANGE.mediumTerm, TIME_RANGE.shortTerm]}
                active={timeRange}
                setActive={setTimeRange}
            />
            <div className={classes.artistsWrapper}>
                {followedArtists?.items.map((el, index) => (
                    <FollowedArtist
                        key={el.name}
                        name={el.name}
                        imgUrl={el.images[0].url}
                        followers={el.followers.total}
                        genres={el.genres}
                        index={index + 1} />
                ))}
            </div>
        </div>
    );
}