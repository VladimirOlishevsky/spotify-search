
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
        color: 'red',
        borderTop: '1px solid red',
        borderBottom: '1px solid red',
    }
})