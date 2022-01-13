
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
    albumName: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: 'inherit',
    },
    info: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    img: {
        width: 150,
        height: 150,
    },
})