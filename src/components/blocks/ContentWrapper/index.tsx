import { Tabs } from 'components';
import { TABS_CONFIG } from 'components/constants';
import { Search, Artist, Profile } from 'components/blocks';
import { useContext, useState } from 'react';
import { getStyles } from './styles';
import { ToggleTheme } from 'components/elements/ToggleTheme';
import { AppContext } from 'context/context';


export const ContentWrapper = () => {

    const { theme } = useContext(AppContext);
    const [active, setActive] = useState(TABS_CONFIG.search);
    const classes = getStyles({ theme });

    return (
        <div>
            <div className={classes.header}>
                <Tabs
                    values={[TABS_CONFIG.search, TABS_CONFIG.personal]}
                    active={active}
                    setActive={setActive}
                    externalActiveStyles={classes.active}
                    externalTabStyles={classes.tab}
                />
                <ToggleTheme />
            </div>
            {TABS_CONFIG.search === active ?
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