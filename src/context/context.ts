import { createContext, Dispatch, SetStateAction } from 'react';

export enum CURRENT_THEME {
  light = 'light',
  dark = 'dark'
}

export interface IThemeProps {
  theme: string
}

export interface IAppContext {
  theme: CURRENT_THEME,
  setTheme: Dispatch<SetStateAction<CURRENT_THEME>>,
  accessToken: string,
  isTokenExpired: boolean
}

export const AppContext = createContext<IAppContext>({
  theme: CURRENT_THEME.dark,
  setTheme: () => { },
  accessToken: '',
  isTokenExpired: false
});

