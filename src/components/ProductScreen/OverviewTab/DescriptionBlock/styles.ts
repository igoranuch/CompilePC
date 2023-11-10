import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    description: {
      textAlign: 'justify',
      '& p': {
        margin: 0,
        padding: 0,
      },
    },
    descriptionPaper: {
      padding: theme.spacing(5),
      width: '100% !important',
    },
  }),
);

export default useStyles;
