
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles({
    root: {
        width: 160,
        height: 230,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: 8,
        opacity: 1,
        boxShadow: '-6px -6px 10px rgba(0, 0, 0, 0.2),6px 6px 10px rgba(0, 0, 0, 0.2)',
        padding: 16,
        gap: 24,
        color: 'inherit',
        textDecoration: 'none'
    },
    info: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    songName: {
        fontSize: 18
    },
    author: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 14
    },
    img: {
        width: 150,
        height: 150,
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
})

// <!-- HTML !-->
// <button class="button-5" role="button">Button 5</button>

// /* CSS */
// .button-5 {
//   align-items: center;
//   background-clip: padding-box;
//   background-color: #fa6400;
//   border: 1px solid transparent;
//   border-radius: .25rem;
//   box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
//   box-sizing: border-box;
//   color: #fff;
//   cursor: pointer;
//   display: inline-flex;
//   font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
//   font-size: 16px;
//   font-weight: 600;
//   justify-content: center;
//   line-height: 1.25;
//   margin: 0;
//   min-height: 3rem;
//   padding: calc(.875rem - 1px) calc(1.5rem - 1px);
//   position: relative;
//   text-decoration: none;
//   transition: all 250ms;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   vertical-align: baseline;
//   width: auto;
// }

// .button-5:hover,
// .button-5:focus {
//   background-color: #fb8332;
//   box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
// }

// .button-5:hover {
//   transform: translateY(-1px);
// }

// .button-5:active {
//   background-color: #c85000;
//   box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
//   transform: translateY(0);
// }