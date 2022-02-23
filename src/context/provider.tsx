import { LOCALSTORAGE_KEYS } from 'components/constants';
import { FC, useState } from 'react';
import { AppContext, CURRENT_THEME } from './context';


export const ContextProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(CURRENT_THEME.dark);

  const timestamp = localStorage.getItem(LOCALSTORAGE_KEYS.timestamp)
  const isTokenExpired = (Date.now() - Number(timestamp)) / 1000 > 3600 ? true : false

  console.log('isTokenExpired', isTokenExpired)
  console.log('(Date.now() - Number(timestamp)) / 1000', (Date.now() - Number(timestamp)) / 1000)

  return (
    <AppContext.Provider value={{
      theme,
      setTheme,
      isTokenExpired
    }}>
      {children}
    </AppContext.Provider>
  );
};
