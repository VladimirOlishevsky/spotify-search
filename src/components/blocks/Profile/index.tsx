import { Avatar } from 'components';
import { useAppSelector, authSelector } from 'redux-app';
import { profileApi } from 'redux-app/profile';
import { FollowedArtistsWrapper } from './FollowedArtistsWrapper';
import { getStyles } from './styles';

export const Profile = () => {

    const classes = getStyles();
    const { authToken } = useAppSelector(authSelector);

    // console.log('1111111', authToken)
    const token = 'BQC4Ohocajl-0qWnmCwQ4EV8zTqAqs24PPaRltv0pAMc_tGlgbGuIvj88KjxxoaMz49gq_HewO9e6I335r-ELcOAlYFyM6Cosol0j7HZ2gln90XLrs-UA1PsPQFESRpuFWdtVFDIbtdh-7ACekCryeKn_UJdaEOc4gyPRwdXBap0oI3H8UplSMtZP2IoVRKTe4hi_9hDiqtIkckqRnT8ChJDxCJM58gBdQ'

    const { data: profile } = profileApi.useGetProfileQuery({ token: token })
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