
import { makeStyles } from '@mui/styles';

interface IProps {
    imgUrl: string
}

export const getStyles = makeStyles({
    artist: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        gap: 16,
        padding: 16,
        boxSizing: 'border-box',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'rgba(0,0,0,0.1)'
        }
    },
    img: {
        backgroundImage: (props: IProps) => `url(${props.imgUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        width: 50,
        height: 65
    },
    info: {
        display: 'flex', 
        flexDirection: 'column',
    },
    name: {
        fontSize: 20
    },
    genres: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 4,

    },
    descriptionWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        fontSize: 14
    },
    descriptionText: {
        color: '#EDEBA0'
    }
})

