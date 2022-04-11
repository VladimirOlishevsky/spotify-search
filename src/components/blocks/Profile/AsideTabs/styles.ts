
import { DefaultTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';


export const getStyles = makeStyles((theme: DefaultTheme) => ({
    root: {
        display: 'flex', 
        gap: theme.spacing(), 
        // backgroundColor: '#F9DB6D', 
        backgroundColor: '#FED9B7', 
        borderRadius: theme.spacing(1), 
        padding: theme.spacing(1.25)
    },
    img: {
        padding: theme.spacing(1.25),
        border: '1px solid transparent',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column'
    },
    active: {
        width: '100%',
        height: 3,
        backgroundColor: 'red'
    }
}))

