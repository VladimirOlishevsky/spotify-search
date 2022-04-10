import { profileApi } from 'redux-app/profile';
import { getStyles } from './styles';
import { ProfileSongCard } from '../ProfileSongCard';
import { TITLE_VARIANT } from 'components/constants';
import { Title } from 'components';


export const RecentlyPlayedWrapper = () => {

    const classes = getStyles();

    const { data: recentlyPlayed } = profileApi.useGetRecentlyPlayingTracksQuery()
    const data = recentlyPlayed?.items.flat()
    return (
        <div className={classes.root}>
            <Title type={TITLE_VARIANT.profile} variant='h1' title='Last Recently Played Song' />
            <div className={classes.content}>
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