
import { DefaultTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles((theme: DefaultTheme) => ({
  searchComponent: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(),
    position: 'relative',
    boxShadow: '0px 16px 32px rgba(0, 0, 0, 0.1), 0px 4px 12px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.1);',
    borderRadius: '0.7rem'
  },
  form: {
    position: 'relative',
    maxWidth: 500,
    width: '100%',
    background: '#57bd84',
    borderRadius: '.7rem',
  },
  input: {
    display: 'block',
    height: '5rem',
    fontFamily: 'Lato, sans-serif',
    border: 0,
    color: '#2f2f2f',
    fontSize: '1.8rem',
    '&[type="search"]': {
      outline: 0,
      width: '100%',
      background: '#fff',
      padding: '0 1.6rem',
      borderRadius: '.7rem',
      appearance: 'none',
      transition: 'all .3s cubic-bezier(0, 0, 0.43, 1.49)',
      transitionProperty: 'width, border-radius',
      zIndex: 1,
      position: 'relative',
      '&::-webkit-search-cancel-button:hover': {
        cursor: 'pointer'
      }
    },
    '&:not(:placeholder-shown)': {
      borderRadius: '.7rem 0 0 .7rem',
      width: 'calc(100% - 6rem)',
      display: 'block',
      button: {
        display: 'block',
      }
    },
  },
  button: {
    height: '5rem',
    fontFamily: 'Lato, sans-serif',
    border: 0,
    color: '#2f2f2f',
    fontSize: '1.8rem',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '6rem',
    fontWeight: 'bold',
    background: '#57bd84',
    borderRadius: '0 .7rem .7rem 0',
  },
  label: {
    position: 'absolute',
    clip: 'rect(1px, 1px, 1px, 1px)',
    padding: 0,
    border: 0,
    height: 1,
    width: 1,
    overflow: 'hidden',
  }
}))

