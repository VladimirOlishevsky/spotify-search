import { Avatar } from 'components';
import { artistsApi, artistsSelector, useAppSelector, authSelector } from 'redux-app';
import { PROFILE_TOP_REQUEST, TIME_RANGE } from 'redux-app/constants';
import { profileApi } from 'redux-app/profile';
import { FollowedArtist } from '../FollowedArtist';
import { getStyles } from './styles';

export const FollowedArtistsWrapper = () => {

    const classes = getStyles();
    const { authToken } = useAppSelector(authSelector);

    // console.log('1111111', authToken)
    const token = 'BQCNT8gzb4_HNrqJoPz4fURWyC8nr4LuWg3ebe3f38nukHF_nlxblGzRIPPwANpnggBcJxSoc0V_1uMx11skjuLvRVdk4QYLgv3Nwrr8xMyqiz4MoxyivU-nmO0FIAdw7WuC5gzPCDt9II5n2U0K3NBb_u-uFVEorUV-1Y4dwyZCDl4BW1XepAQkpMWjTKyOFi3H2i6uiR6Yk_QAAarm4EqfgeS9OFTk3w'

    const { data: followedArtists } = profileApi.useGetTopFromProfileQuery(
        { token: token, requestType: PROFILE_TOP_REQUEST.artists, timeRange: TIME_RANGE.longTerm }
    )


    console.log('followedArtists', followedArtists)

    return (
        <div className={classes.root}>
            <span className={classes.title}>Some of the artists you follow</span>
            <div className={classes.artistsWrapper}>
                {followedArtists?.items.map(el => (
                    <FollowedArtist name={el.name} imgUrl={el.images[0].url} followers={el.followers.total} genres={el.genres} />
                    // <a className={classes.artist}>
                    //     {el.name}
                    // </a>
                ))}
            </div>
        </div>
    );
}