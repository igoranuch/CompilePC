import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    autofillStyle: {
      '&:-webkit-autofill': {
        WebkitBoxShadow: `0 0 0 100px ${theme.palette.backgroundBlack} inset !important`,
        WebkitTextFillColor: '#fff !important',
      },
    },
    linkText: {
      textDecoration: 'none',
      color: theme.palette.white,
    },
  }),
);

export default useStyles;
