import { TIME_RANGE } from "redux-app/constants";
import recently from 'assets/recently.png';
import artist from 'assets/artist.png';
import song from 'assets/song.png';
import { ListenedTracksWrapper } from "./ListenedTracksWrapper";
import { FollowedArtistsWrapper } from "./FollowedArtistsWrapper";
import { RecentlyPlayedWrapper } from "./RecentlyPlayedWrapper";

export const asideTabsConfig = [
    { name: 'artist', img: artist, component: <FollowedArtistsWrapper /> },
    { name: 'song', img: song, component: <ListenedTracksWrapper /> },
    { name: 'recently', img: recently, component: <RecentlyPlayedWrapper /> },
]

export const followedWrappertabs: Record<string, TIME_RANGE> = {
    'All time': TIME_RANGE.longTerm,
    '6 month': TIME_RANGE.mediumTerm,
    '1 month': TIME_RANGE.shortTerm,
}

export const timeValues = Object.keys(followedWrappertabs);