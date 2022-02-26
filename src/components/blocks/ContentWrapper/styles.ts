
import { makeStyles } from '@mui/styles';
import { CURRENT_THEME, IThemeProps } from 'context/context';

export const getStyles = makeStyles({
    header: {
        display: 'flex', 
        justifyContent: 'space-between'
    },
    active: {
        color: (props: IThemeProps) => props.theme === CURRENT_THEME.light ? 'rgba(97, 150, 204, 1)' : '#e74344',
        borderColor: (props: IThemeProps) => props.theme === CURRENT_THEME.light ? 'rgba(97, 150, 204, 1)' : '#e74344',
        borderStyle: 'solid',
        borderWidth: '1px 0px'
    },
    tab: {
        color: (props: IThemeProps) => props.theme === CURRENT_THEME.light ? '#D7263D' : 'inherit' 
    }
})