import { artistsApi, artistsSelector, useAppSelector } from 'redux-app';
import { RelatedArtists } from './RelatedArtists';
import { getStyles } from './styles';
import { TopAlbums } from './TopAlbums';
import { TopSongs } from './TopSongs';
import { PieChart } from '..';
import { Avatar } from 'components';
import { AppContext } from 'context/context';
import { useContext } from 'react';

//spotify:track:7rvEwAILTqxBpdIyUifkE8 - go to spotify 

export const Artist = () => {
    
    const { currentArtistId } = useAppSelector(artistsSelector);
    const { accessToken, theme } = useContext(AppContext);
    const classes = getStyles({ theme });

    const { data: artist } = artistsApi.useGetSingleArtistQuery({ token: accessToken, artistId: currentArtistId });

    const avatarUrl = artist?.images[0]?.url || '';
    const name = artist?.name;

    return (
        <div className={classes.root}>

            {artist ?
                <div className={classes.wrapper}>
                    <div className={classes.info}>
                        <div className={classes.artistInfo}>
                            <span className={classes.name}>
                                {name}
                            </span>
                            <span className={classes.followers}>
                                Followers {artist?.followers.total}
                            </span>
                            <Avatar imgUrl={avatarUrl}/>
                        </div>
                        <div className={classes.pieChartWrapper}>
                            <span className={classes.pieChartTitle}>
                                Analysis last 5 songs
                            </span>
                            <PieChart />
                        </div>

                    </div>
                    <RelatedArtists />
                    <TopSongs />
                    <TopAlbums />
                </div>
                : null}
        </div>
    );
}