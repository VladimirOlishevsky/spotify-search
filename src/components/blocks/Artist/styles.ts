
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles({
    root: {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center'
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 1200,
        width: '100%',
        gap: 32
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
    },
    name: {
        fontSize: 60,
        fontWeight: 600
    },
    img: {
        width: '100%',
        maxWidth: 300,
        height: 'auto'
    }
})

