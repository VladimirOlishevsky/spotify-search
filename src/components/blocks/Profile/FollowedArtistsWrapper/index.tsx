import { Avatar } from 'components';
import { artistsApi, artistsSelector, useAppSelector, authSelector } from 'redux-app';
import { profileApi } from 'redux-app/profile';
import { FollowedArtist } from '../FollowedArtist';
import { getStyles } from './styles';

export const FollowedArtistsWrapper = () => {

    const classes = getStyles();
    const { authToken } = useAppSelector(authSelector);

    // console.log('1111111', authToken)
    const token = 'BQBfrSv5z7BaysjD2KEghDh7zNVeEsBX_9eXOTbxgHhjWEZbntmEJgeEBcCMD6yWhDY8JHRPrAdtZVy4rPcWvCWEd1a0uP7SIThXuO2fh9qq-EkL5mAjvcFZdEfkoEHIiRqPEsBz4QnQQ3_kcvHIbp-K2mMF7ozVQQmYTEQlPGLkOeW9cUlNh3xIOk6froEsYhkuLerjGFeX'

    const { data: followedArtists } = profileApi.useGetProfileFollowArtistsQuery({ token: token })


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