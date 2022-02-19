import recently from 'assets/recently.png';
import artist from 'assets/artist.png';
import song from 'assets/song.png';
import { asideTabsConfig } from './constants';
import { useState } from 'react';
import { getStyles } from './styles';
import clsx from 'clsx';

interface IAsideTabs {
    imgUrl: string,
    name: string,
    genres: string[],
    followers: number,
    index: number,
    link: string
}

export const AsideTabs = () => {
    const classes = getStyles();
    const [activeTab, setActiveTab] = useState(asideTabsConfig[0].name)

    return (
        <div className={classes.root}>
            {asideTabsConfig.map(el => (
                <img
                    className={clsx(
                        classes.img,
                        el.name === activeTab ? classes.active : undefined)}
                    onClick={() => setActiveTab(el.name)}
                    width={60}
                    src={el.img}
                    alt={el.name} />
            ))}
        </div>
    );
}