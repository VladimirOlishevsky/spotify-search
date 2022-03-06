
import { DefaultTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles((theme: DefaultTheme) => ({
    root: {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center'
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 1200,
        width: '100%',
        gap: theme.spacing(4)
    },
    info: {
        display: 'flex',
        gap: theme.spacing(10),
        justifyContent: 'center'
    },
    artistInfo: {
        display: 'flex', 
        flexDirection: 'column'
    },
    name: {
        color: theme.search?.text.titles,
        fontSize: 60,
        fontWeight: 600
    },
    followers: {
        color: theme.search?.text.titles,
    },
    pieChartWrapper: {
        display: 'flex', 
        width: 300, 
        alignItems: 'center', 
        flexDirection: 'column', 
        justifyContent: 'space-around'
    },
    pieChartTitle: {
        color: theme.search?.text.titles,
    }
}))

