import { SongCard } from 'components';
import { artistsApi, artistsSelector, useAppSelector, authSelector, setTrackIds } from 'redux-app';
import { useAppDispatch } from 'redux-app/store';
import { getStyles } from './styles';
import noImage from 'assets/no_image.jpg';
import { useEffect } from 'react';


export const Chart = () => {

    const classes = getStyles();
    const { authToken } = useAppSelector(authSelector);
    const { topTrackIds } = useAppSelector(artistsSelector);

    const { data: audioFeatures } = artistsApi.useGetAudioFeaturesQuery({ token: authToken, artistIds: topTrackIds })

    console.log('audioFeatures', audioFeatures);
    return (
        <div>
           
        </div>
    );
}