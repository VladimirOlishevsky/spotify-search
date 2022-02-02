import { Search, Artist } from 'components/blocks';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { Fragment } from 'react'

import { getStyles } from 'styles';


export const App = () => {
  const classes = getStyles();
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>

          <Route path="/about" element={
            <div className={classes.root}>
              <Search />
              <Artist />
            </div>
          }/>
          <Route path="/" element={
            <LoginComponent />
          }
          />
        </Routes>
      </div>
    </Router>
    // <div className={classes.root}>
    //   <Search />
    //   <Artist />
    // </div>
  );
}


const LoginComponent = () => {
  const CLIENT_ID = "515ff8815b3a47b3b2133151fe0caa5c"; // insert your client id here from spotify
  const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
  const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/";
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

  return (
    <div className="container">
      <h1>hi</h1>
      <button onClick={() => handleLogin()}>login to spotify</button>
    </div>
  );
}