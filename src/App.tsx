import { Search, Artist, Login, ContentWrapper, Profile } from 'components/blocks';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { authSelector, useAppSelector } from 'redux-app';
import { getStyles } from 'styles';


export const App = () => {
  const classes = getStyles();

  const { authToken } = useAppSelector(authSelector);

  return (
    <div className={classes.root}>
      <Router>
        <Routes>
          {/* <Route path="/about" element={
            <div className={classes.root}>
              <Search />
              <Artist />
            </div>
          } /> */}
          <Route path="/" element={
            <ContentWrapper />
            // authToken ? <Profile /> : <Login />
          }
          />
        </Routes>
      </Router>
    </div>
  );
}


const Between = () => { // change beautiful
  const { authToken } = useAppSelector(authSelector);

  console.log('authToken', authToken);
  return authToken ?
    <>
      <Search />
      <Artist />
    </>
  : <Login />
}