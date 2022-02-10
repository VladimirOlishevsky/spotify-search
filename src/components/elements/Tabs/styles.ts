
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        gap: 40
    },
    tab: {
        listStyleType: 'none',
        padding: 10,
        '&:hover': {
            cursor: 'pointer'
        },
    },
    active: {
        color: '#e74344',
        borderTop: '1px solid #e74344',
        borderBottom: '1px solid #e74344',
    }
})