import { Tabs } from 'components';
import { TABS_CONFIG } from 'components/constants';
import { Search, Artist, Profile } from 'components/blocks';
import { useState } from 'react';
import { getStyles } from './styles';
import { ToggleTheme } from 'components/elements/ToggleTheme';


export const ContentWrapper = () => {

    const [activeTab, setActiveTab] = useState(TABS_CONFIG.search);
    const classes = getStyles();

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Tabs
                    values={[TABS_CONFIG.search, TABS_CONFIG.personal]}
                    active={activeTab}
                    setActive={setActiveTab}
                    externalActiveStyles={classes.active}
                    externalTabStyles={classes.tab}
                />
                <ToggleTheme />
            </div>
            {TABS_CONFIG.search === activeTab ?
                <>
                    <Search />
                    <Artist />
                </>
                :
                <Profile />
            }
        </div>
    );
}