
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        gap: 32
    },
    title: {
        fontSize: 32
    },
    artistsWrapper: {
        display: 'grid',
        gridAutoFlow: 'column',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(10, auto)'
    },
    artist: {
        height: 32,
        width: '100%',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'rgba(0,0,0,0.1)'
        }
    },
    active: {
        color: '#e74344',
        borderTop: '1px solid #e74344',
        borderBottom: '1px solid #e74344',
    }
})