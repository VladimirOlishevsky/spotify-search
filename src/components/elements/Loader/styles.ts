
import { makeStyles } from '@mui/styles';

export const getStyles = makeStyles({
    loader: {
        animation: '$spinningColor 1.5s ease-in-out infinite',
        margin: '50px auto',
        border: '5px double #f0eff5',
        borderRadius: '50%',
        width: 30,
        height: 30,
    },
    '@keyframes spinningColor': {
        '0%': {
          transform: 'rotate(360deg)',
          borderTop: '5px dashed #69C9D0',
          borderBottom: '5px dashed #EE1D52B3',
        },
        '25%': {
          borderTop: '5px dashed #69C9D0',
          borderBottom: '5px dashed #EE1D52B3',
        },
        '50%': {
          borderTop:'5px dashed #69C9D0',
          borderBottom: '5px dashed #EE1D52B3',
        },
        '75%': {
          borderTop:'5px dashed #69C9D0',
          borderBottom:'5px dashed #EE1D52B3',
        },
        '100%': {
          borderTop:'5px dashed #69C9D0',
          borderBottom:'5px dashed #EE1D52B3',
        }
      }

})

