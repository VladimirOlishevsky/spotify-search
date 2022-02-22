
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles({
    root: {
        // height: 100,
        position: 'relative',
        marginRight: '1.5rem',
        top: 0,
        width: 0,
        height: 30,
        borderLeft: '2px solid rgba(97, 150, 204, 0.56)',
        '&:hover > div': {
            display: 'initial',
            animation: '$flickerOpacify .6s ease-in-out',
            animationIterationCount: 'infinite'
        }
    },

    ///////

    active: {
        display: 'initial',
        animation: 'flickerOpacify .6s ease-in-out',
        animationIterationCount: 'infinite',
    },
    lights: {
        // display: 'initial',
        animation: '$flickerOpacify .6s ease-in-out',
        animationIterationCount: 'infinite',
        display: 'none',
        position: 'absolute',
        top: 'calc(100% + 18px)',
        left: -14,
        background: '#fee488',
        borderRadius: '100%',
        boxShadow: '0 0 20px #fee488',
        '-webkit-filter': 'blur(2px)',
        filter: 'blur(2px)',
        width: 27,
        height: 28,
    },

    ///////////

    lightButton: {
        display: 'flex',
        position: 'absolute',
        width: 46,
        height: 48,
        top: 'calc(100% - 2px)',
        left: -23,
        padding: 0,
        margin: 0,
        border: 0,
        cursor: 'pointer',
        outline: 'none',
        backgroundColor: 'transparent',
        '& svg': {
            width: 50,
            height: 50,
            '& path:not(#bulbPath)': {
                fill: '#222'
            },
            '& path#bulbPath': {
                fill: 'rgba(97, 150, 204, 0.56)'
            },
            '& svg path#bgPath': {
                fill: '#e8e8e8',
                fillOpacity: 0.4,
            }

            //active dark
            // .dark .lightbulb svg path#bulbPath {
            //     fill: var(--yellow);
            // }

            // .dark .lightbulb svg path#bgPath {
            //     fill: var(--yellow-light);
            //     fill-opacity: 1;
            // }
        },
        '&:hover svg path#bulbPath': {
            animation: '$flicker 0.6s ease-in-out',
            animationIterationCount: 'infinite',
        },
        '&:hover svg path#bgPath': {
            animation: '$flickerBg .6s ease-in-out',
            animationIterationCount: 'infinite',
        }
    },

    '@keyframes flicker': {
        '0%': {
            fill: 'rgba(97, 150, 204, 0.56)',
        },
        '25%': {
            fill: '#ffc100',
        },
        '50%': {
            fill: 'rgba(97, 150, 204, 0.56)'
        },
        '75%': {
            fill: 'rgba(97, 150, 204, 0.56)'
        },
        '100%': {
            fill: '#ffc100'
        }
    },
    '@keyframes flickerBg': {
        '0%': {
            fill: '#e8e8e8',
            fillOpacity: 0.4
        },
        '25%': {
            fill: '#fee488',
            fillOpacity: 1,
        },
        '50%': {
            fill: '#e8e8e8',
            fillOpacity: 0.4,
        },
        '75%': {
            fill: '#e8e8e8',
            fillOpacity: 0.4,
        },
        '100%': {
            fill: '#fee488',
            fillOpacity: 1
        }
    },

    '@keyframes flickerOpacify': {
        '0%': {
            opacity: 0.4
        },
        '25%': {
            opacity: 1
        },
        '50%': {
            opacity: 0.1
        },
        '75%': {
            opacity: 0.4
        },
        '100%': {
            opacity: 1
        }
    }
})