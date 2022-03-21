
import { DefaultTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles((theme: DefaultTheme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        opacity: 1,
        boxShadow: '-6px -6px 10px rgba(0, 0, 0, 0.2),6px 6px 10px rgba(0, 0, 0, 0.2)',
        padding: theme.spacing(4),
        gap: theme.spacing(4)
    },
    info: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: theme.spacing(4),
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            alignItems: 'center'
        }
    },
    songName: {
        color: theme.search?.text.text,
    },
    author: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: theme.spacing(0.5),
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        }
    },
    authorName: {
        color: theme.search?.text.description,
    },
    img: {
        width: '100%',
        maxWidth: 100,
        height: 'auto'
    },
    button: {
        alignItems: 'center',
        backgroundClip: 'padding-box',
        backgroundColor: '#fa6400',
        border: '1px solid transparent',
        borderRadius: 8,
        boxShadow: 'rgba(0, 0, 0, 0.02) 0 1px 3px 0',
        boxSizing: 'border-box',
        color: '#fff',
        cursor: 'pointer',
        display: 'inline-flex',
        fontSize: 16,
        fontWeight: 600,
        justifyContent: 'center',
        lineHeight: 1.25,
        margin: 0,
        minHeight: '3rem',
        padding: 'calc(.875rem - 1px) calc(1.5rem - 1px)',
        position: 'relative',
        textDecoration: 'none',
        transition: 'all 250ms',
        userSelect: 'none',
        '-webkit-user-select': 'none',
        touchAction: 'manipulation',
        verticalAlign: 'baseline',
        width: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        '&:hover': {
            backgroundColor: '#fb8332',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0 4px 12px',
            transform: 'translateY(-1px)'
        },
        '&:focus': {
            backgroundColor: '#fb8332',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0 4px 12px'
        },
        '&:active': {
            backgroundColor: '#c85000',
            boxShadow: 'rgba(0, 0, 0, .06) 0 2px 4px',
            transform: 'translateY(0)'
        }
    }
}))