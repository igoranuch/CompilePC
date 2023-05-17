import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkText: {
      textDecoration: 'none',
      color: theme.palette.white,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      width: theme.spacing(60),
    },
    propertiesBox: {
      display: 'flex',
      flexDirection: 'row',
      gap: theme.spacing(3),
      alignItems: 'center',
    },
    headCellBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: theme.spacing(1),
    },
  }),
);

export default useStyles;
