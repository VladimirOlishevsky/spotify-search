import { Tabs } from 'components';
import { TABS_CONFIG } from 'components/constants';
import { Search, Artist, Profile } from 'components/blocks';
import { useState } from 'react';
import { getStyles } from './styles';


export const ContentWrapper = () => {

    const [active, setActive] = useState(TABS_CONFIG.search);
    const classes = getStyles()

    return (
        <div>
            <Tabs
                values={[TABS_CONFIG.search, TABS_CONFIG.personal]}
                active={active}
                setActive={setActive}
                externalClasses={classes.active}
            />
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