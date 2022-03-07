
import { textSizeVariant } from 'theme/constant';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';
import * as React from 'react';
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import { CURRENT_THEME } from 'context/context';


declare module '@mui/material/styles' {
  interface DefaultTheme extends Theme {
    headerTabs: {
      active: {
        color: string,
        borderColor?: string
      },
      color?: string
    },
    search?: {
      text: {
        titles: string,
        text: string,
        description: string,
      }
    },
    profile: {
      title: string,
      tabStyles: {
        active: {
          color: string,
          borderColor: string
        },
        color: string
      },
      card: {
        title: string,
        genres: string,
        description: string
      }
    }
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    },
  }
}

interface Props {
  themeType?: CURRENT_THEME,
  children: React.ReactNode,
}

export const MuiThemeProvider = ({
  themeType = CURRENT_THEME.light,
  children,
}: Props) => {

  const themeMapping = {
    [CURRENT_THEME.light]: lightTheme,
    [CURRENT_THEME.dark]: darkTheme,
  };

  const currentTheme = themeMapping[themeType];

  const theme = createTheme({
    ...currentTheme,
    components: {
      MuiTypography: {
        styleOverrides: {
          h1: { fontSize: textSizeVariant.h1, fontWeight: 'bold' },
          h2: { fontSize: textSizeVariant.h2, fontWeight: 'bold' },
          h3: { fontSize: textSizeVariant.h3, fontWeight: 'bold' },
          h4: { fontSize: textSizeVariant.h4, fontWeight: 'bold' },
          h5: { fontSize: textSizeVariant.h5, fontWeight: 'bold' },
          h6: { fontSize: textSizeVariant.h5 },
          body1: { fontSize: textSizeVariant.body1 },
          body2: { fontSize: textSizeVariant.body2 },
          caption: { fontSize: textSizeVariant.caption },
        }
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
