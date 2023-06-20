import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: `${theme.spacing(2)} !important`,
    },
    paperStyle: {
      backgroundColor: `${theme.palette.backgroundBlack} !important`,
    },
    autofillStyle: {
      '&:-webkit-autofill': {
        WebkitBoxShadow: `0 0 0 100px ${theme.palette.backgroundBlack} inset !important`,
        WebkitTextFillColor: '#fff !important',
      },
    },
    label: {
      zIndex: '2000',
      color: `${theme.palette.backgroundGrey} !important`,
    },
  }),
);

export default useStyles;
