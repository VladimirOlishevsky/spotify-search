import { Avatar } from 'components';
import { LOCALSTORAGE_KEYS } from 'components/constants';
import { useMemo, useState } from 'react';
import { useAppSelector, authSelector } from 'redux-app';
import { profileApi } from 'redux-app/profile';
import { AsideTabs } from './AsideTabs';
import { asideTabsConfig } from './constants';
import { FollowedArtistsWrapper } from './FollowedArtistsWrapper';
import { ListenedTracksWrapper } from './ListenedTracksWrapper';
import { RecentlyPlayedWrapper } from './RecentlyPlayedWrapper';
import { getStyles } from './styles';

export const Profile = () => {

    const classes = getStyles();
    const { authToken } = useAppSelector(authSelector);

    console.log('localstorage token', localStorage.getItem(LOCALSTORAGE_KEYS.token))    
    console.log('localstorage time', localStorage.getItem(LOCALSTORAGE_KEYS.timestamp));

    const [activeAsideTab, setActiveAsideTab] = useState(asideTabsConfig[0].name);
    const actualComponent = useMemo(() => asideTabsConfig.find(el => el.name === activeAsideTab)?.component, [activeAsideTab])

    const token = '' // actual token here for test

    const { data: profile } = profileApi.useGetProfileQuery({ token: token })
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
            {/* <FollowedArtistsWrapper />
            <ListenedTracksWrapper />
            <RecentlyPlayedWrapper /> */}
        </div>
    );
}