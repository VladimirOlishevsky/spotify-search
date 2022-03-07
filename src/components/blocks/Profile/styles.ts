
import { DefaultTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles((theme: DefaultTheme) => ({
    root: {
        display: 'flex', 
        flexDirection: 'column', 
        width: '100%', 
        alignItems: 'center', 
        gap: theme.spacing(6.5),
        position: 'relative',
    },
    title: {
        color: theme.profile.title
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '70%',
        width: '100%',
        gap: theme.spacing(4)
    },
    asideTabs: {
        position: 'absolute',
        top: theme.spacing(6.5),
        left: 0
    }
}))

