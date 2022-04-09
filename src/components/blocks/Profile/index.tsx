import { Typography } from '@mui/material';
import { Avatar } from 'components';
import { useMemo, useState } from 'react';
import { profileApi } from 'redux-app/profile';
import { AsideTabs } from './AsideTabs';
import { asideTabsConfig } from './constants';
import { getStyles } from './styles';

export const Profile = () => {

    const classes = getStyles();
    const [activeAsideTab, setActiveAsideTab] = useState(asideTabsConfig[0].name);
    const actualComponent = useMemo(() => asideTabsConfig.find(el => el.name === activeAsideTab)?.component, [activeAsideTab])

    const { data: profile } = profileApi.useGetProfileQuery()
    const profileUrl = profile?.images.length ? profile.images[0].url : ''

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography className={classes.title} variant='h1'>Welcome {profile?.display_name}</Typography>
                <Avatar imgUrl={profileUrl} />
                <AsideTabs activeAsideTab={activeAsideTab} setActiveAsideTab={setActiveAsideTab} />
            </div>
            {actualComponent}
        </div>
    );
}