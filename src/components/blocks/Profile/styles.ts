
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles({
    root: {
        display: 'flex', 
        flexDirection: 'column', 
        width: '100%', 
        alignItems: 'center', 
        gap: 50,
        position: 'relative',
    },
    title: {
       fontSize: 32
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '70%',
        width: '100%',
    },
    asideTabs: {
        position: 'absolute',
        top: 50,
        left: 0
    }
})

