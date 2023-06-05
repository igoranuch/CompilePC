import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: '50px',
      maxHeight: '50px',
    },
    priceBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingRight: '30px',
    },
    carouselImage: { width: '350px', maxHeight: '350px' },
    carousel: {
      display: 'flex',
      alignItems: 'center',
      width: '450px',
      height: '450px',
      position: 'relative',
      border: '1px',
      borderRadius: '7px',
      backgroundColor: theme.palette.backgroundGrey,
    },
    contentBox: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      backgroundColor: theme.palette.backgroundGrey,
      borderRadius: '30px',
      padding: '10px',
      gap: '20px',
    },
    typo: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textDecoration: 'none',
      color: theme.palette.white,
      fontWeight: 'bold !important',
      fontSize: '32px',
    },
  }),
);

export default useStyles;
