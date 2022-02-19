import { useAppSelector, authSelector } from 'redux-app';
import { profileApi } from 'redux-app/profile';
import { getStyles } from './styles';
import { ProfileSongCard } from '../ProfileSongCard';


export const RecentlyPlayedWrapper = () => {

    const classes = getStyles();
    const { authToken } = useAppSelector(authSelector);

    const token = 'BQB4nD3br6jTiB3cdg7J4aoj9-exo7c-1JDWaiNOw348ulobv0jmTjp9-VwSwyRA3dGId381n-n73yApJTm5-XNdnMmUfVfPnnFbPwohTKrFohOOFCl4LDmY4ORrmuGy9tPs0Ura3kuLu0ZLhfVXFMk3J9Siaq6uElgbeUPD2onsmSGBMZXJM-OQ4fM_jFswqqEa7h7U2D_Qd0xaxXsP0tewLZHu_rTWwggdjg'
    const { data: recentlyPlayed } = profileApi.useGetRecentlyPlayingTracksQuery(
        { token: token }
    )

    const data = recentlyPlayed?.items.flat()
    console.log('data', data)

    return (
        <div className={classes.root}>
            <span className={classes.title}>Last Recently Played Songs</span>
            <div>
                {data?.map((el, index) => (
                    <ProfileSongCard
                        key={index}
                        index={index + 1}
                        imgUrl={el.track.album.images[0].url || ''}
                        artists={el.track.artists}
                        name={el.track.name}
                        preview_url={el.track.preview_url}
                        link={el.track.uri}
                    />
                ))}
            </div>
        </div>
    );
}