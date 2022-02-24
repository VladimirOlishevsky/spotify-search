import { artistsApi, artistsSelector, useAppSelector, authSelector } from 'redux-app';
import { RelatedArtists } from './RelatedArtists';
import { getStyles } from './styles';
import { TopAlbums } from './TopAlbums';
import { TopSongs } from './TopSongs';
import { PieChart } from '..';
import { Avatar } from 'components';
import { LOCALSTORAGE_KEYS } from 'components/constants';
import { AppContext } from 'context/context';
import { useContext } from 'react';

//spotify:track:7rvEwAILTqxBpdIyUifkE8 - go to spotify 

export const Artist = () => {
    const classes = getStyles();

    const { currentArtistId } = useAppSelector(artistsSelector);
    // const { authToken } = useAppSelector(authSelector);
    // const authToken = localStorage.getItem(LOCALSTORAGE_KEYS.token) || ''
    const { accessToken } = useContext(AppContext)

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
                            <span>
                                Followers {artist?.followers.total}
                            </span>
                            <Avatar imgUrl={avatarUrl}/>
                        </div>
                        <div className={classes.pieChartWrapper}>
                            <span>
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