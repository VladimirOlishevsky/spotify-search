
import { DefaultTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles((theme: DefaultTheme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(4)
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    active: {
        color: theme.headerTabs.active.color,
        borderColor: theme.headerTabs.active.borderColor,
        borderStyle: 'solid',
        borderWidth: '1px 0px',
    },
    tab: {
        color: theme.headerTabs.color,
    }
}))