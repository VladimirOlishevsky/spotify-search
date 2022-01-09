import { SongCard } from 'components';
import { artistsApi, artistsSelector, useAppDispatch, useAppSelector, authSelector } from 'redux-app';
import { getStyles } from './styles';

//spotify:track:7rvEwAILTqxBpdIyUifkE8 - go to spotify 

export const Artist = () => {
    const classes = getStyles();

    const dispatch = useAppDispatch(); // delete
    const { currentArtistId } = useAppSelector(artistsSelector);
    const { authToken } = useAppSelector(authSelector);

    const { data: artist } = artistsApi.useGetSingleArtistQuery({ token: authToken, artistId: currentArtistId })
    const { data: album } = artistsApi.useGetArtistAlbumsQuery({ token: authToken, artistId: currentArtistId })
    const { data: topTracks } = artistsApi.useGetArtistTopTracksQuery({ token: authToken, artistId: currentArtistId })
    const { data: relatedArtists } = artistsApi.useGetRelatedArtistsQuery({ token: authToken, artistId: currentArtistId })
    console.log('artitst', artist)
    console.log('album', album)
    console.log('topTracks', topTracks)
    console.log('relatedArtists', relatedArtists)


    console.log('topTrackstopTracks', topTracks?.tracks.slice(0, 5))

    const avatar = artist?.images[0].url
    const adaptTracks = topTracks?.tracks.slice(0, 5)

    // const accessTokenQueryResult = authApi.endpoints.getAccessToken.useQuery('');

    // const { data } = accessTokenQueryResult;
    // const accessToken = data?.access_token;

    // useEffect(() => {
    //     if (!accessToken) return;
    //     dispatch(updateAccessToken(accessToken));
    // }, [dispatch, accessToken]);

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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


                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div>
                        Popular tracks
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {adaptTracks?.map(el =>
                            <SongCard
                                img={el.album.images[0].url}
                                songName={el.name}
                                songArtist={el.album.artists.map(el => el.name)}
                                urlToSpotify={el.external_urls.spotify}
                            />
                        )}
                    </div>
                </div>
            </div>

        </div>

    );
}