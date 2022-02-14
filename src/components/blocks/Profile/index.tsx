import { Avatar } from 'components';
import { useAppSelector, authSelector } from 'redux-app';
import { profileApi } from 'redux-app/profile';
import { FollowedArtistsWrapper } from './FollowedArtistsWrapper';
import { getStyles } from './styles';

export const Profile = () => {

    const classes = getStyles();
    const { authToken } = useAppSelector(authSelector);

    // console.log('1111111', authToken)
    // const token = 'BQBfrSv5z7BaysjD2KEghDh7zNVeEsBX_9eXOTbxgHhjWEZbntmEJgeEBcCMD6yWhDY8JHRPrAdtZVy4rPcWvCWEd1a0uP7SIThXuO2fh9qq-EkL5mAjvcFZdEfkoEHIiRqPEsBz4QnQQ3_kcvHIbp-K2mMF7ozVQQmYTEQlPGLkOeW9cUlNh3xIOk6froEsYhkuLerjGFeX'

    const { data: profile } = profileApi.useGetProfileQuery({ token: authToken })
    const profileUrl = profile?.images.length ? profile.images[0].url : ''

    return (
        <div className={classes.root}>
            <span className={classes.title}>
                Welcome {profile?.display_name}
            </span>
            <Avatar imgUrl={profileUrl} />
            <FollowedArtistsWrapper />
        </div>
    );
}