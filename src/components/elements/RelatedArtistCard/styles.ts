
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles({
    root: {
        background: 'none',
        border: 'none',
        font: 'inherit',
        cursor: 'pointer',
        outline: 'inherit',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        opacity: 1,
        boxShadow: '-6px -6px 10px rgba(0, 0, 0, 0.2),6px 6px 10px rgba(0, 0, 0, 0.2)',
        padding: 16,
        width: 'max-content',
        fontSize: 20,
        gap: 16,
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    img: {
        width: 50,
        height: 50,
    },
})