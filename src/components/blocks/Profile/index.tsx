import { Avatar } from 'components';
import { artistsApi, artistsSelector, useAppSelector, authSelector } from 'redux-app';
import { profileApi } from 'redux-app/profile';
import { getStyles } from './styles';

export const Profile = () => {

    const classes = getStyles();
    const { authToken } = useAppSelector(authSelector);
    const token = 'BQDImk7ic023lYhmA7rxiRj--LW9K_ckUxzY3GuPRzGDwNC-EKXQXSAs1gB71_o0CppdZ8_srUbimrbZX0-cC7uuMaCaT1Oz2nLHWB7BNQQ3UMFWVsHhFRFzO9xYyOxOCnfIOk5Lbs0xplO7dSLFFMAMHqvvwmcxaZhsec4'

    const { data: profile } = profileApi.useGetProfileQuery({ token: token })
    console.log('profile', profile)
    const profileUrl = profile?.images.length ? profile.images[0].url : ''

    return (
        <div className={classes.root}>
            <span className={classes.title}>
                Welcome {profile?.display_name}
            </span>
            <Avatar imgUrl={profileUrl} />
        </div>
    );
}