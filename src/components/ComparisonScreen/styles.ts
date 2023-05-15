import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      padding: theme.spacing(4),
      borderRadius: theme.spacing(2),
      backgroundColor: theme.palette.backgroundGrey,
      marginTop: theme.spacing(8),
      '& .MuiTableContainer-root': {
        maxWidth: theme.spacing(430),
        maxHeight: theme.spacing(200),
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
      '& .MuiTableCell-root': {
        border: '1px solid',
        borderColor: theme.palette.backgroundBlack,
        minWidth: theme.spacing(60),
      },
      '& .MuiTableHead-root': {
        '& .MuiTableCell-root': {
          backgroundColor: theme.palette.backgroundGrey,
          border: '1px solid',
          borderColor: theme.palette.backgroundBlack,
        },
      },
    },
  }),
);

export default useStyles;
