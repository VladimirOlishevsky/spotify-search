
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
            maxWidth: '100%'
        }
    },
    tabStyles: {
        color: theme.profile.tabStyles.color
    },
    activetabs: {
        color: theme.profile.tabStyles.active.color,
        borderTop: `1px solid ${theme.profile.tabStyles.active.borderColor}`,
        borderBottom: `1px solid ${theme.profile.tabStyles.active.borderColor}`,
    },
    songsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2)
    }
}))

