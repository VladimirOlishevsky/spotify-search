import { artistsApi, artistsSelector, useAppSelector, authSelector } from 'redux-app';
import { getStyles } from './styles';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
Chart.register(ArcElement, Tooltip, Legend);
//#345469

interface Type extends Record<string, number> { }

export const ChartComponent = () => {

    const classes = getStyles();
    const { authToken } = useAppSelector(authSelector);
    const { topTrackIds } = useAppSelector(artistsSelector);


    const { data: audioFeatures } = artistsApi.useGetAudioFeaturesQuery({ token: authToken, artistIds: topTrackIds })

    console.log('1111', audioFeatures);

    if (audioFeatures?.audio_features[0] === null) return null

    const adaptAudioFeatures = audioFeatures?.audio_features.reduce((acc: Type, el: Type) => {
        console.log('222222')
        Object.keys(acc).forEach((val) => {
            acc[val] += el[val]
        })
        return acc
    }, {
        acousticness: 0,
        danceability: 0,
        energy: 0,
        instrumentalness: 0,
        key: 0,
        liveness: 0,
        loudness: 0,
        speechiness: 0,
        tempo: 0,
        valence: 0,
    });

    console.log('adaptAudioFeatures', adaptAudioFeatures);

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
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
        <div>
            <Pie data={data} />
        </div>
    );
}