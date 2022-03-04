
// import CssBaseline from '@material-ui/core/CssBaseline';
// import React, { useMemo } from 'react';

import { textSizeVariant } from 'theme/constant';
// import { latoFonts } from 'theme/themes/fonts';

// import { commonTheme } from './commonTheme';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';
// import { config } from './configTheme';
// import { createMuiTheme } from '@mui/material';
// import { ThemeProvider } from '@mui/styles';


// interface Props {
//   themeType?: 'light' | 'dark',
//   children: React.ReactNode,
// }
// export const MuiThemeProvider = ({
//   themeType = 'light',
//   children,
// }: Props) => {
//   const themeMapping = {
//     light: lightTheme,
//     dark: darkTheme,
//   };
//   const currentTheme = themeMapping[themeType];
//   const theme = useMemo(() => createMuiTheme({
//     ...commonTheme,
//     ...currentTheme,
//     palette: {
//       ...commonTheme.palette,
//       ...currentTheme.palette,
//     },
//     props: {
//       ...config,
//     },
//     overrides: {
//       MuiCssBaseline: {
//         '@global': {
//           '@font-face': latoFonts,
//           'svg:not([fill])': {
//             fill: 'currentColor',
//           },
//         },
//       },
//       MuiTypography: {
//         h1: { fontSize: textSizeVariant.h1, fontWeight: 'bold' },
//         h2: { fontSize: textSizeVariant.h2, fontWeight: 'bold' },
//         h3: { fontSize: textSizeVariant.h3, fontWeight: 'bold' },
//         h4: { fontSize: textSizeVariant.h4, fontWeight: 'bold' },
//         h5: { fontSize: textSizeVariant.h5, fontWeight: 'bold' },
//         h6: { fontSize: textSizeVariant.h5 },
//         body1: { fontSize: textSizeVariant.body1 },
//         body2: { fontSize: textSizeVariant.body2 },
//         caption: { fontSize: textSizeVariant.captionText },
//       },
//     },
//   }), [themeType]);
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       {children}
//     </ThemeProvider>
//   );
// };
import * as React from 'react';
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import { bluePrimrose } from './color';
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
          caption: { fontSize: textSizeVariant.captionText },
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
