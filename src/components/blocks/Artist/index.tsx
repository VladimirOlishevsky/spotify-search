import { artistsApi, artistsSelector, useAppDispatch, useAppSelector, authSelector } from 'redux-app';
import { RelatedArtists } from './RelatedArtists';
import { getStyles } from './styles';
import { TopAlbums } from './TopAlbums';
import { TopSongs } from './TopSongs';

//spotify:track:7rvEwAILTqxBpdIyUifkE8 - go to spotify 

export const Artist = () => {
    const classes = getStyles();

    const dispatch = useAppDispatch(); // delete
    const { currentArtistId } = useAppSelector(artistsSelector);
    const { authToken } = useAppSelector(authSelector);

    const { data: artist } = artistsApi.useGetSingleArtistQuery({ token: authToken, artistId: currentArtistId })
    const { data: album } = artistsApi.useGetArtistAlbumsQuery({ token: authToken, artistId: currentArtistId })
    const { data: relatedArtists } = artistsApi.useGetRelatedArtistsQuery({ token: authToken, artistId: currentArtistId })
    console.log('artitst', artist)
    console.log('album', album)
    console.log('relatedArtists', relatedArtists)

    const avatar = artist?.images[0].url

    // const accessTokenQueryResult = authApi.endpoints.getAccessToken.useQuery('');

    // const { data } = accessTokenQueryResult;
    // const accessToken = data?.access_token;

    // useEffect(() => {
    //     if (!accessToken) return;
    //     dispatch(updateAccessToken(accessToken));
    // }, [dispatch, accessToken]);

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <div className={classes.info}>
                    <span>
                        Followers {artist?.followers.total}
                    </span>
                    <img
                        className={classes.img}
                        src={avatar}
                        alt="artist-img" />
                </div>
                <TopSongs />
                <TopAlbums />
                <RelatedArtists />
            </div>
        </div>

    );
}