import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      '& .MuiPaper-root': {
        backgroundColor: theme.palette.backgroundGrey,
        width: 'fit-content',
        height: 'fit-content',
      },
      marginTop: '20px',
    },
    partsContainer: {
      display: 'flex',
      gap: '7px',
      maxHeight: '600px',
      maxWidth: '850px',
      overflow: 'auto',
      flexWrap: 'wrap',
      '&::-webkit-scrollbar': {
        width: 4,
        height: 4,
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.green,
        borderRadius: theme.shape.borderRadius,
      },
      '&::-webkit-scrollbar-corner': {
        backgroundColor: 'transparent',
      },
    },
    description: { textAlign: 'justify' },
    descriptionPaper: {
      padding: theme.spacing(4),
      width: '100% !important',
    },
    contentBox: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: '20px',
      justifyContent: 'space-between',
      width: `100% !important`,
    },
    carouselImage: { width: '400px', maxHeight: '400px' },
    carousel: {
      display: 'flex',
      alignItems: 'center',
      width: '600px',
      height: '600px',
      position: 'relative',
      border: '1px',
      borderRadius: '7px',
      backgroundColor: theme.palette.backgroundGrey,
    },
  }),
);

export default useStyles;
