import { Tabs } from 'components';
import { useState } from 'react';
import { useAppSelector, authSelector } from 'redux-app';
import { PROFILE_TOP_REQUEST, TIME_RANGE } from 'redux-app/constants';
import { profileApi } from 'redux-app/profile';
import { FollowedArtist } from '../FollowedArtist';
import { ListenedTrack } from '../ListenedTrack';

export const ListenedTracksWrapper = () => {

    // const classes = getStyles();
    const { authToken } = useAppSelector(authSelector);
    // const [timeRange, setTimeRange] = useState(timeValues[0]);

    // const requestTimeRange = followedWrappertabs[timeRange]
    // console.log('active', followedWrappertabs[timeRange])

    // console.log('1111111', authToken)
    const token = 'BQCRwb-Wu9dRNy7hO2dAWQU-4fdmvBDd0JYXGI_Oe-Y9GCGYjLB2fQNsT139tzt7z4XG-LcRF1BkqVNFuirrPOvcyqj0CcXAZWXh9u9z4sY5k1804jmzZxiDWXaepY3zpKf5s0JUWgCzV_GAVE9PG32c06BdH5O_dEfr57O0gWEa_-6Wmym_tmwTIB3WpJ96rUv_FlG-lxtfDwDvZVhnGvA'

    const { data: listenedTracks } = profileApi.useGetProfileListenedTracksQuery(
        { token: token, timeRange: TIME_RANGE.longTerm }
    )

    console.log('listenedTracks', listenedTracks)

    return (
        <div>
            {listenedTracks?.items.map((el, index) => (
                <ListenedTrack
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
    );
}