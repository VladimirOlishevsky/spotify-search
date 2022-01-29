import { artistsApi, artistsSelector, useAppSelector, authSelector } from 'redux-app';
import { RelatedArtists } from './RelatedArtists';
import { getStyles } from './styles';
import { TopAlbums } from './TopAlbums';
import { TopSongs } from './TopSongs';

import noImage from 'assets/no_image.jpg';
import { ChartComponent } from '../Chart';

//spotify:track:7rvEwAILTqxBpdIyUifkE8 - go to spotify 

export const Artist = () => {
    const classes = getStyles();

    const { currentArtistId } = useAppSelector(artistsSelector);
    const { authToken } = useAppSelector(authSelector);

    const { data: artist } = artistsApi.useGetSingleArtistQuery({ token: authToken, artistId: currentArtistId })
    const { data: album } = artistsApi.useGetArtistAlbumsQuery({ token: authToken, artistId: currentArtistId })
    const { data: relatedArtists } = artistsApi.useGetRelatedArtistsQuery({ token: authToken, artistId: currentArtistId })

    const avatar = artist?.images[0]?.url;
    const name = artist?.name

    return (
        <div className={classes.root}>
            <ChartComponent />
            {artist ?
                <div className={classes.wrapper}>
                    <div className={classes.info}>
                        <span className={classes.name}>
                            {name}
                        </span>
                        <span>
                            Followers {artist?.followers.total}
                        </span>
                        {avatar && <img
                            className={classes.img}
                            src={avatar || noImage}
                            alt="artist-img" />}
                    </div>
                    <RelatedArtists />
                    <TopSongs />
                    <TopAlbums />
                </div>
                : null}
        </div>
    );
}