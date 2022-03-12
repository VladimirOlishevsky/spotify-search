
import { DefaultTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles((theme: DefaultTheme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2)
    },
    albumsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap: theme.spacing(),
        flexWrap: 'wrap',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center'
        }
    },
}))

