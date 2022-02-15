import { Tabs } from 'components';
import { TABS_CONFIG } from 'components/constants';
import { Search, Artist, Profile } from 'components/blocks';
import { useState } from 'react';


export const ContentWrapper = () => {

    const [active, setActive] = useState(TABS_CONFIG.search)

    return (
        <div>
            <Tabs active={active} setActive={setActive} />
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