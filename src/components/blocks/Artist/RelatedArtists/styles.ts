
import { DefaultTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles((theme: DefaultTheme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2)
    },
    relatedArtists: {
        display: 'flex',
        gap: theme.spacing(2),
        flexWrap: 'wrap'
    },
}))

