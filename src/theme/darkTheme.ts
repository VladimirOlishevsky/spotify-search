export const darkTheme = {
  palette: {
    type: 'dark' as const,
    text: {
      primary: '#fff',
      secondary: '#B2CAD4',
      hint: '#000',
    },
    action: {
      active: '#3DA0FF',
      disabled: 'rgba(255, 255, 255, 0.26)',
    },
    background: {
      paper: '#303030',
      default: '#4D4D4D',
    },
  },
  dividerColor: {
    default: 'rgba(255,255,255,0.3)',
    light: 'rgba(255,255,255,0.1)',
  },
  moreDark: { // test custom, update
    color: '#333333'
  }
};
