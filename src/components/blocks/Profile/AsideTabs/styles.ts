
import { makeStyles } from '@mui/styles';


export const getStyles = makeStyles({
    root: {
        display: 'flex', 
        flexDirection: 'column', 
        gap: 8, 
        backgroundColor: '#F9DB6D', 
        borderRadius: 32, 
        padding: 10
    },
    img: {
        padding: 10,
        border: '1px solid transparent'
    },
    active: {
        borderBottom: '1px solid red'
    }
})

