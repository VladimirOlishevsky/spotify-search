import { Login, ContentWrapper } from 'components/blocks';
import { AppContext } from 'context/context';
import { useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { getStyles } from 'styles';


export const App = () => {
  const classes = getStyles();
  const { isTokenExpired } = useContext(AppContext)

  return (
    <div className={classes.root}>
      <Router>
        <Routes>
          <Route path="/" element={
            isTokenExpired ? <Login /> : <ContentWrapper />
          }
          />
        </Routes>
      </Router>
    </div>
  );
}