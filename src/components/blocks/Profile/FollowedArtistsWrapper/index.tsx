import { Tabs } from 'components';
import { useContext, useState } from 'react';
import { profileApi } from 'redux-app/profile';
import { FollowedArtist } from '../FollowedArtist';
import { followedWrappertabs, timeValues } from '../constants';
import { getStyles } from './styles';
import { AppContext } from 'context/context';

export const FollowedArtistsWrapper = () => {

    const classes = getStyles();
    const { accessToken } = useContext(AppContext);
    const [timeRange, setTimeRange] = useState(timeValues[0]);
    const requestTimeRange = followedWrappertabs[timeRange]

    const { data: followedArtists } = profileApi.useGetProfileFollowedArtistsQuery(
        { token: accessToken, timeRange: requestTimeRange }
    )

    return (
        <div className={classes.root}>
            <span className={classes.title}>Top listened artists</span>

            <Tabs
                values={timeValues}
                active={timeRange}
                setActive={setTimeRange}
                externalActiveStyles={classes.active}
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