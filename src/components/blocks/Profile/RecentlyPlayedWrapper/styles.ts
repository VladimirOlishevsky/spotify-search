
import { DefaultTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles((theme: DefaultTheme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '70%',
        width: '100%',
        gap: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
        }
    },
    content: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(3),
        }
    }
}))

