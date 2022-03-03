import { bluePrimrose } from './color';


export const commonTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 420,
      md: 600,
      lg: 1025,
      xl: 1920,
    },
  },
  palette: {
    action: {
      active: bluePrimrose.main,
    },
    primary: {
      main: bluePrimrose.main,
    },
  },
  colorsPalette: {
    green: '#3daf3a',
    violet: '#7A229B',
    orange: '#F2A657',
    yellow: '#FFE177',
    red: '#CC2A35',
    darkGrey: '#93A7AF',
  },
  primary: {
    main: '#1155cb',
  },
  success: {
    main: bluePrimrose.main,
  },
  error: {
    main: '#CC2A35',
  },
  gradientPalette: {
    pink: ['#EF8F85', '#D34D7D'],
    cyan: ['#23E6C3', '#15A0EE'],
    violet: ['#F394E4', '#773CE3'],
    blue: ['#28CAFB', '#900DE7'],
    green: ['#C7EF85', '#229843'],
    coral: ['#EFB285', '#D35D4D'],
    emerald: ['#4BD561', '#4D93D3'],
    carmine: ['#E48F5E', '#DF487E'],
    orange: ['#FFB571', '#CC6011'],
    gray: ['#BCC4E7', '#7B819B'],
  },
  typography: {
    fontFamily: `Lato, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
Roboto, Ubuntu, "Helvetica Neue", sans-serif;`,
    fontWeightBold: 800,
  },
  shape: {
    borderRadius: 8,
  },
};
