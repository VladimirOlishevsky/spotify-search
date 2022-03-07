import { getStyles } from './styles';
import { textSizeVariant } from 'theme';
import { Typography } from '@mui/material';
import { TITLE_VARIANT } from 'components/constants';

interface ITitle {
    type: TITLE_VARIANT,
    variant: keyof typeof textSizeVariant
    title: string,
}

export const Title = ({
    type,
    variant,
    title
}: ITitle) => {
    const classes = getStyles({ type });
    return (
        <Typography variant={variant} className={classes.root}>
            {title}
        </Typography>
    );
}