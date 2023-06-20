import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    checkIcon: {
      color: theme.palette.green,
      margin: 0,
    },
  }),
);

export default useStyles;
