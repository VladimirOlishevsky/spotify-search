import { SearchBar } from 'components';
import { useEffect } from 'react';
import { useAppDispatch } from 'redux-app';
import { authApi, updateAccessToken } from 'redux-app/auth';
import { getStyles } from './styles';


export const Login = () => {

    const classes = getStyles();

    const CLIENT_ID = "515ff8815b3a47b3b2133151fe0caa5c"; // insert your client id here from spotify
    const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
    const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/about";
    const SPACE_DELIMITER = "%20";
    const SCOPES = [
        "user-read-currently-playing",
        "user-read-playback-state",
        "playlist-read-private",
    ];

    const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);
    const handleLogin = () => {
        window.location.href = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    };

    const dispatch = useAppDispatch()
    // const click = () => newAuthApi.endpoints.getAccessToken.initiate('')

    const code = new URLSearchParams(window.location.hash).get('access_token');
    console.log('code', code);
    console.log('window-location', window.location.hash.split('&').find(el => el.includes('access_token'))?.split('=')[1]);

    return (
        <div className={classes.root}>
            <h1>hi</h1>
            <a
                className={classes.login}
                href={`${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`}>
                login to spotify
            </a>
        </div>
    );
}