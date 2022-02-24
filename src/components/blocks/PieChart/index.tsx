import { artistsApi, artistsSelector, useAppSelector } from 'redux-app';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { AppContext } from 'context/context';
import { useContext } from 'react';
Chart.register(ArcElement, Tooltip, Legend);
//#345469

interface Type extends Record<string, number> { }

export const PieChart = () => {

    const { accessToken } = useContext(AppContext);
    const { topTrackIds } = useAppSelector(artistsSelector);
    const { data: audioFeatures } = artistsApi.useGetAudioFeaturesQuery({ token: accessToken, artistIds: topTrackIds })

    if (audioFeatures?.audio_features[0] === null) return null
    const adaptAudioFeatures = audioFeatures?.audio_features.reduce((acc: Type, el: Type) => {
        Object.keys(acc).forEach((val) => {
            acc[val] += Number(el[val].toFixed(2))
        })
        return acc
    }, {
        acousticness: 0,
        danceability: 0,
        energy: 0,
        liveness: 0,
        speechiness: 0,
    });


    const data = {
        labels: Object.keys(adaptAudioFeatures || []),
        datasets: [
            {
                label: '# of Votes',
                data: Object.values(adaptAudioFeatures || []),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <Pie data={data} />
    );
}