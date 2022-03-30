import { LOCALSTORAGE_KEYS } from 'components/constants';
import { FC, useEffect, useState } from 'react';
import { AppContext, CURRENT_THEME } from './context';


export const ContextProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(CURRENT_THEME.dark);
  const [accessToken, setAccessToken] = useState('');

  const timestamp = localStorage.getItem(LOCALSTORAGE_KEYS.timestamp)
  const isHourExpired = (Date.now() - Number(timestamp)) / 1000 > 3600
  const isTokenExpired = isHourExpired ? true : false

  useEffect(() => {
    if (!localStorage.getItem(LOCALSTORAGE_KEYS.token)) return
    setAccessToken(localStorage.getItem(LOCALSTORAGE_KEYS.token) || '')
  }, [])

  return (
    <AppContext.Provider value={{
      theme,
      setTheme,
      accessToken,
      isTokenExpired
    }}>
      {children}
    </AppContext.Provider>
  );
};
