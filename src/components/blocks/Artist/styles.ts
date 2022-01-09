
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 1200,
        width: '100%'
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
    },
    img: {
        width: '100%',
        maxWidth: 300,
        height: 'auto'
    }
})

