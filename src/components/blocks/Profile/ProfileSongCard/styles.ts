
import { DefaultTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface IProps {
    imgUrl: string
}

export const getStyles = makeStyles((theme: DefaultTheme) => ({
    root: {
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
            padding: 0,
            gap: theme.spacing()
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
    infoWrapper: {
        width: '100%',
        display: 'flex', 
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'flex-start'
        }
    },
    info: {
        display: 'flex', 
        flexDirection: 'column',
        maxWidth: '50%'
    },
    singers: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: theme.spacing(0.5),
    },
    descriptionWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(0.5),
        fontSize: theme.typography.body1.fontSize
    },
    descriptionText: {
        color: theme.profile.card.description,
    },
    count: {
        maxWidth: 30,
        width: '100%',
        textAlign: 'center',
        color: theme.profile.card.description
    },
}))

