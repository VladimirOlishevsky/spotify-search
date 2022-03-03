
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles'
import { CURRENT_THEME, IThemeProps } from 'context/context';

export const getStyles = makeStyles((theme: Theme) => {
    console.log(theme); 
    return ({
    header: {
        display: 'flex', 
        justifyContent: 'space-between'
    },
    active: {
        color: (props: IThemeProps) => props.theme === CURRENT_THEME.light ? '#04395E' : '#e74344',
        borderColor: (props: IThemeProps) => props.theme === CURRENT_THEME.light ? '#FF7D00' : '#e74344',
        borderStyle: 'solid',
        borderWidth: '1px 0px'
    },
    tab: {
        color: (props: IThemeProps) => props.theme === CURRENT_THEME.light ? '#04395E' : 'inherit',
    }
})})