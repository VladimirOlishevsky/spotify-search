import { FC, useState } from 'react';
import { AppContext, CURRENT_THEME } from './context';


export const ContextProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(CURRENT_THEME.dark);

  return (
    <AppContext.Provider value={{
      theme,
      setTheme
    }}>
      {children}
    </AppContext.Provider>
  );
};
