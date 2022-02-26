import { makeStyles } from '@mui/styles';
import { CURRENT_THEME } from 'context/context';

interface IProps {
    theme: CURRENT_THEME
}

export const getStyles = makeStyles({
    root: {
        backgroundColor: (props: IProps) => props.theme === CURRENT_THEME.light ? '#F8F8F8' : '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
        padding: 50
    }
})

