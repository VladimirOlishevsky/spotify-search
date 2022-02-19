import { Avatar } from 'components';
import { useAppSelector, authSelector } from 'redux-app';
import { profileApi } from 'redux-app/profile';
import { FollowedArtistsWrapper } from './FollowedArtistsWrapper';
import { ListenedTracksWrapper } from './ListenedTracksWrapper';
import { RecentlyPlayedWrapper } from './RecentlyPlayedWrapper';
import { getStyles } from './styles';

export const Profile = () => {

    const classes = getStyles();
    const { authToken } = useAppSelector(authSelector);

    // console.log('1111111', authToken)
    const token = '' // actual token here for test

    const { data: profile } = profileApi.useGetProfileQuery({ token: token })
    const profileUrl = profile?.images.length ? profile.images[0].url : ''

    return (
        <div className={classes.root}>
            <span className={classes.title}>
                Welcome {profile?.display_name}
            </span>
            <Avatar imgUrl={profileUrl} />
            <FollowedArtistsWrapper />
            <ListenedTracksWrapper />
            <RecentlyPlayedWrapper />
        </div>
    );
}