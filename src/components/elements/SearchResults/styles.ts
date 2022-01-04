
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#6667ABB3',
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

