
import { DefaultTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface IProps {
    imgUrl: string
}

export const getStyles = makeStyles((theme: DefaultTheme) => ({
    artist: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        gap: theme.spacing(2),
        padding: theme.spacing(2),
        boxSizing: 'border-box',
        textDecoration: 'none',
        color: 'inherit',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'rgba(0,0,0,0.1)'
        },
        [theme.breakpoints.down('sm')]: {
            padding: 0
        }
    },
    img: {
        backgroundImage: (props: IProps) => `url(${props.imgUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        maxWidth: 50,
        width: '100%',
        height: 65
    },
    info: {
        display: 'flex', 
        flexDirection: 'column',
    },
    genres: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: theme.spacing(0.5),
        color: theme.profile.card.genres,
    },
    descriptionWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(0.5),
        fontSize: theme.typography.body2.fontSize
    },
    count: {
        maxWidth: 30,
        width: '100%',
        textAlign: 'center',
        color: theme.profile.card.description
    },
    descriptionText: {
        color: theme.profile.card.description
    }
}))

