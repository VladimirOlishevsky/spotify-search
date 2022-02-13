
import { makeStyles } from '@mui/styles';

interface IProps {
    imgUrl: string
}

export const getStyles = makeStyles({
    artist: {
        display: 'flex',
        width: '100%',
        gap: 16,
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
        flexDirection: 'column'
    }
})

