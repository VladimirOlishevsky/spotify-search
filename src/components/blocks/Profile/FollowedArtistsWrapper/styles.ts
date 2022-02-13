
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        gap: 50
    },
    title: {
        fontSize: 32
    },
    artistsWrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    artist: {
        height: 32,
        width: '100%',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'rgba(0,0,0,0.1)'
        }
    }
})

