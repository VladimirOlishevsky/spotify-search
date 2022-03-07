
import { DefaultTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { TITLE_VARIANT } from 'components/constants';
import { getTitleColor } from './utils';

interface IProps {
    type: TITLE_VARIANT
}

export const getStyles = makeStyles((theme: DefaultTheme) => ({
    root: {
        color: (props: IProps) => getTitleColor(props.type, theme),
    },
}))