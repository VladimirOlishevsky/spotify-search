
import { DefaultTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles((theme: DefaultTheme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(4.5)
    },
    tab: {
        listStyleType: 'none',
        padding: theme.spacing(1.5),
        '&:hover': {
            cursor: 'pointer'
        },
    },
}))