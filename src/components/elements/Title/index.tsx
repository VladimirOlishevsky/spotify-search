import { AppContext } from 'context/context';
import { useContext } from 'react';
import { getStyles } from './styles';

interface ITitle {
    title: string,
}

export const Title = ({
    title
}: ITitle) => {
    const { theme } = useContext(AppContext);
    const classes = getStyles({ theme });

    return (
        <div className={classes.root}>
            {title}
        </div>
    );
}