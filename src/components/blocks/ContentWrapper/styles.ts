
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles({
    header: {
        display: 'flex', 
        justifyContent: 'space-between'
    },
    active: {
        color: '#e74344',
        borderTop: '1px solid #e74344',
        borderBottom: '1px solid #e74344',
    }
})