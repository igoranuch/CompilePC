import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainBox: {
      width: '90%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: '1px',
      borderRadius: '7px',
      borderColor: 'none',
      backgroundColor: theme.palette.backgroundGrey,
      padding: '14px',
      minHeight: '90px',
      gap: '10px',
      marginBottom: '30px',
    },
    leftBlock: {
      display: 'flex',
      flexDirection: 'row',
      gap: '10px',
    },
    image: {
      width: '50px',
      maxHeight: '50px',
    },
    titleBox: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '170px',
      gap: '10px',
    },

    priceBox: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      minWidth: '200px',
      // marginRight: '50px',
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
      flexDirection: 'row',
      marginTop: '10px',
      justifyContent: 'space-between',
      width: `100% !important`,
    },
    typo: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      maxWidth: '350px',
      textDecoration: 'none',
      color: theme.palette.white,
      margin: '15px 0',
      fontSize: '40px',
    },
  }),
);

export default useStyles;
