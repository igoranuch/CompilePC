import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchBar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(0, 10, 3, 10),
      '& .MuiInputBase-input': {
        textAlign: 'left !important',
        padding: `${theme.spacing(0, 3, 0, 2)} !important`,
      },
    },
    searchIcon: {
      fill: `${theme.palette.green} !important`,
    },
  }),
);

export default useStyles;
