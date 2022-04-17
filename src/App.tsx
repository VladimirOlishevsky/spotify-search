import { Login, ContentWrapper } from 'components/blocks';
import { AppContext } from 'context/context';
import { useContext } from 'react';
import { getStyles } from 'styles';
import { MuiThemeProvider } from 'theme';


export const App = () => {

  const { isTokenExpired, theme } = useContext(AppContext);
  const classes = getStyles({ theme });
  return (
    <MuiThemeProvider themeType={theme}>
      <div className={classes.root}>
        {isTokenExpired ? <Login /> : <ContentWrapper />}
      </div>
    </MuiThemeProvider>
  );
}