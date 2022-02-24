import { Avatar } from 'components';
import { AppContext } from 'context/context';
import { useContext, useMemo, useState } from 'react';
import { profileApi } from 'redux-app/profile';
import { AsideTabs } from './AsideTabs';
import { asideTabsConfig } from './constants';
import { getStyles } from './styles';

export const Profile = () => {

    const classes = getStyles();
    const { accessToken } = useContext(AppContext);

    const [activeAsideTab, setActiveAsideTab] = useState(asideTabsConfig[0].name);
    const actualComponent = useMemo(() => asideTabsConfig.find(el => el.name === activeAsideTab)?.component, [activeAsideTab])

    const { data: profile } = profileApi.useGetProfileQuery({ token: accessToken })
    const profileUrl = profile?.images.length ? profile.images[0].url : ''

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div className={classes.asideTabs}>
                    <AsideTabs activeAsideTab={activeAsideTab} setActiveAsideTab={setActiveAsideTab} />
                </div>
                <span className={classes.title}>
                    Welcome {profile?.display_name}
                </span>
                <Avatar imgUrl={profileUrl} />
            </div>
            {actualComponent}
        </div>
    );
}