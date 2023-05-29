import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      marginTop: theme.spacing(8),
      '& .MuiPaper-root': {
        backgroundColor: theme.palette.backgroundGrey,
        width: 'fit-content',
        height: 'fit-content',
        paddingBottom: 10,
      },
    },
    image: {
      width: '400px',
      maxHeight: '400px',
    },
    imageBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '500px',
      height: '500px',
      border: '1px',
      borderRadius: '7px',
      backgroundColor: theme.palette.backgroundGrey,
    },
  }),
);

export default useStyles;
