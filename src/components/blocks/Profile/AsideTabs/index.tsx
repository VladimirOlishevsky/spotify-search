import recently from 'assets/recently.png';
import artist from 'assets/artist.png';
import song from 'assets/song.png';
// import { asideTabsConfig } from './constants';
import { useState } from 'react';
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
    // const [activeTab, setActiveTab] = useState(asideTabsConfig[0].name)

    return (
        <div className={classes.root}>
            {asideTabsConfig.map(el => (
                <img
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