
import { makeStyles } from '@mui/styles';
import { CURRENT_THEME, IThemeProps } from 'context/context';

export const getStyles = makeStyles((theme) => ({
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
        gap: 32
    },
    info: {
        display: 'flex',
        gap: 80,
    },
    artistInfo: {
        display: 'flex', 
        flexDirection: 'column'
    },
    name: {
        color: (props: IThemeProps) => props.theme === CURRENT_THEME.light ? '#15616D' : 'inherit',
        fontSize: 60,
        fontWeight: 600
    },
    followers: {
        color: (props: IThemeProps) => props.theme === CURRENT_THEME.light ? '#15616D' : 'inherit',
    },
    pieChartWrapper: {
        display: 'flex', 
        width: 300, 
        alignItems: 'center', 
        flexDirection: 'column', 
        justifyContent: 'space-around'
    },
    pieChartTitle: {
        color: (props: IThemeProps) => props.theme === CURRENT_THEME.light ? '#15616D' : 'inherit',
    }
}))

