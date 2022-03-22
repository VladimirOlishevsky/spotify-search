
import { DefaultTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles((theme: DefaultTheme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        gap: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    artistsWrapper: {
        display: 'grid',
        gridAutoFlow: 'column',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(10, auto)',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            gap: 24
        }
    },
    tabStyles: {
        color: theme.profile.tabStyles.color
    },
    active: {
        color: theme.profile.tabStyles.active.color,
        borderTop: `1px solid ${theme.profile.tabStyles.active.borderColor}`,
        borderBottom: `1px solid ${theme.profile.tabStyles.active.borderColor}`,
    }
}))