import { Tabs, Title } from 'components';
import { useState } from 'react';
import { profileApi } from 'redux-app/profile';
import { FollowedArtist } from '../FollowedArtist';
import { followedWrappertabs, timeValues } from '../constants';
import { getStyles } from './styles';
import { TITLE_VARIANT } from 'components/constants';

export const FollowedArtistsWrapper = () => {

    const classes = getStyles();
    const [timeRange, setTimeRange] = useState(timeValues[0]);
    const requestTimeRange = followedWrappertabs[timeRange]

    const { data: followedArtists } = profileApi.useGetProfileFollowedArtistsQuery(
        { timeRange: requestTimeRange }
    )

    return (
        <div className={classes.root}>
            <Title type={TITLE_VARIANT.profile} variant='h1' title='Top listened artists' />
            <Tabs
                values={timeValues}
                active={timeRange}
                setActive={setTimeRange}
                externalTabStyles={classes.tabStyles}
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