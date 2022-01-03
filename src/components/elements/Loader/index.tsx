import { getStyles } from './styles';

export const Loader = () => {
    const classes = getStyles();

    return (
        <div className={classes.loader}></div>
    );
}