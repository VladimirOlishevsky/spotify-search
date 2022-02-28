
import { makeStyles } from '@mui/styles';
import { CURRENT_THEME, IThemeProps } from 'context/context';

export const getStyles = makeStyles({
    root: {
        color: (props: IThemeProps) => props.theme === CURRENT_THEME.light ? '#15616D' : 'inherit',
        fontWeight: 500
    },
})