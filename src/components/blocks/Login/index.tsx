import { LOCALSTORAGE_KEYS } from 'components/constants';
import { useEffect } from 'react';
import { getStyles } from './styles';


export const Login = () => {

    const classes = getStyles();

    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID; // insert your client id here from spotify
    const SPOTIFY_AUTHORIZE_ENDPOINT = process.env.REACT_APP_SPOTIFY_AUTHORIZE_ENDPOINT;
    const REDIRECT_URL_AFTER_LOGIN = process.env.REACT_APP_REDIRECT_URL_AFTER_LOGIN;
    const SPACE_DELIMITER = "%20";
    const SCOPES = [
        "user-read-currently-playing",
        "user-read-playback-state",
        "playlist-read-private",
        "user-read-playback-position",
        "user-top-read",
        "user-read-recently-played",
        "user-library-read",
        "user-follow-read"
    ];
    const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);
    const accessToken = window.location.hash.split('&').find(el => el.includes('access_token'))?.split('=')[1] || '';
    window.history.pushState({}, '', '/');

    useEffect(() => {
        if (!accessToken) return;
        localStorage.setItem(LOCALSTORAGE_KEYS.token, accessToken)
        localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, JSON.stringify(Date.now()));
    }, [accessToken]);

    return (
        <div className={classes.root}>
            <h1>hi</h1>
            <a
                className={classes.login}
                href={`
                ${SPOTIFY_AUTHORIZE_ENDPOINT}
                ?client_id=${CLIENT_ID}
                &redirect_uri=${REDIRECT_URL_AFTER_LOGIN}
                &scope=${SCOPES_URL_PARAM}
                &response_type=token
                &show_dialog=true
                `}>
                login to spotify
            </a>
        </div>
    );
}