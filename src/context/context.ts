import { createContext, Dispatch, SetStateAction } from 'react';

export enum CURRENT_THEME {
  light = 'light',
  dark = 'dark'
} 

export interface IAppContext {
  theme: CURRENT_THEME,
  setTheme: Dispatch<SetStateAction<CURRENT_THEME>>,
}

export const AppContext = createContext<IAppContext>({
  theme: CURRENT_THEME.dark,
  setTheme: () => { },
});

