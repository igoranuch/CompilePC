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
      paddingRight: '10px',
    },
    carouselImage: { minWidth: '150px', maxHeight: '200px' },
    carousel: {
      display: 'flex',
      alignItems: 'center',
      width: '250px',
      height: '300px',
      position: 'relative',
      border: '1px',
      borderRadius: '7px',
      backgroundColor: theme.palette.backgroundGrey,
    },
    contentBox: {
      display: 'flex',
      width: '100%',
      maxHeight: '400px',
      alignItems: 'center',
      backgroundColor: theme.palette.backgroundGrey,
      borderRadius: '30px',
      padding: '30px',
      gap: '50px',
    },
    typo: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textDecoration: 'none',
      color: theme.palette.white,
      fontWeight: 'bold !important',
      fontSize: '24px',
    },
  }),
);

export default useStyles;
