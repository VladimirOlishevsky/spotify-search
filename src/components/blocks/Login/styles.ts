
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    login: {
        backgroundColor: '#3DD1E7',
        border: '0 solid #fff',
        boxSizing: 'border-box',
        color: '#000000',
        display: 'flex',
        fontFamily: ' ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        fontSize: '1rem',
        fontWeight: 700,
        justifyContent: 'center',
        lineHeight: '1.75rem',
        padding: '.75rem 1.65rem',
        position: 'relative',
        textAlign: 'center',
        textDecoration: 'none #000000 solid',
        textDecorationThickness: 'auto',
        width: '100%',
        maxWidth: '460px',
        cursor: 'pointer',
        userSelect: 'none',
        '-webkit-user-select': ' none',
        touchAction: 'manipulation',

        '&:focus': {
            outline: 0,
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            border: '2px solid #fff',
            bottom: '4px',
            left: '4px',
            width: 'calc(100% - 1px)',
            height: 'calc(100% - 1px)',
        },
        '&:hover::after': {
            content: '""',
            bottom: '2px',
            left: '2px',
        }
    }
})

