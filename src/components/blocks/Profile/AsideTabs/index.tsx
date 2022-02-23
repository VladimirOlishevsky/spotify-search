import { getStyles } from './styles';
import clsx from 'clsx';
import { asideTabsConfig } from '../constants';

interface IAsideTabs {
    activeAsideTab: string,
    setActiveAsideTab:  React.Dispatch<React.SetStateAction<string>>,
}

export const AsideTabs = ({
    activeAsideTab,
    setActiveAsideTab
}: IAsideTabs) => {
    const classes = getStyles();
    return (
        <div className={classes.root}>
            {asideTabsConfig.map(el => (
                <img
                    key={el.name}
                    className={clsx(
                        classes.img,
                        el.name === activeAsideTab ? classes.active : undefined)}
                    onClick={() => setActiveAsideTab(el.name)}
                    width={60}
                    src={el.img}
                    alt={el.name} />
            ))}
        </div>
    );
}