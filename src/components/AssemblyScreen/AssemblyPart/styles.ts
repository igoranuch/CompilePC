import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainBox: {
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
    infoBox: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: '10px',
      width: '420px',
    },
    priceBox: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      minWidth: '200px',
    },
    typo: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      maxWidth: '350px',
      textDecoration: 'none',
      color: theme.palette.white,
    },
  }),
);

export default useStyles;
