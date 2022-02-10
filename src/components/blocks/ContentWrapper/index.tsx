import { Tabs } from 'components';
import { TABS_CONFIG } from 'components/constants';
import { Search, Artist } from 'components/blocks';
import { useEffect, useState } from 'react';
import { updateAccessToken, useAppDispatch } from 'redux-app';
// import { getStyles } from './styles';


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
                <>
                    Profile componetnts will be here
                </>
            }
        </div>
    );
}