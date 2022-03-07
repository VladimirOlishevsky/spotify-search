
import { DefaultTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles((theme: DefaultTheme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        gap: theme.spacing(4)
    },
    artistsWrapper: {
        display: 'grid',
        gridAutoFlow: 'column',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(10, auto)'
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