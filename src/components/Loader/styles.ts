import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loaderContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: 9999,
    },
    loaderWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loader: {
      color: theme.palette.green,
    },
  }),
);

export default useStyles;
