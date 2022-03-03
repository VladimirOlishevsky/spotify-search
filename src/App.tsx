import { Login, ContentWrapper } from 'components/blocks';
import { AppContext } from 'context/context';
import { useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { getStyles } from 'styles';
import { MuiThemeProvider } from 'theme';


export const App = () => {

  const { isTokenExpired, theme } = useContext(AppContext);
  const classes = getStyles({ theme });
  return (
    <MuiThemeProvider themeType={theme}>
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
    </MuiThemeProvider>
  );
}