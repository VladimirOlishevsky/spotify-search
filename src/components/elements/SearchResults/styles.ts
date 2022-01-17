
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#6667AB',
        position: 'absolute',
        top: 100,
        width: '100%',
        boxSizing: 'border-box'
    },
    searchResults: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    searchItems: {
        background: 'none',
        color: 'inherit',
        border: 'none',
        padding: 0,
        font: 'inherit',
        cursor: 'pointer',
        outline: 'inherit',
        '&:hover': {
            cursor: 'pointer'
        }
    }
})

