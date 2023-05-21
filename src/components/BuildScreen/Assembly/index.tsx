import React, { useMemo } from 'react';
import { Box } from '@mui/system';
import Button from '@mui/material/Button/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { Paper } from '@mui/material';
import { CategoryName } from '../../../../types';
import useStyles from './styles';
import { selectAssembly } from '../../../store/builder/selectors';
import { eraseAssembly } from '../../../store/builder/slice';
import { getAverageSum, isEmpty, isSaveable } from '../../../utils/assembly';
import AssemblyPart from './AssemblyPart';
import AssemblySaveDialog from './AssemblySaveDialog';

const Assembly = () => {
  const styles = useStyles();

  const dispatch = useDispatch();

  const assembly = useSelector(selectAssembly);

  const isAssemblyEmpty = useMemo(() => isEmpty(assembly), [assembly]);

  const isAssemblySaveable = useMemo(() => isSaveable(assembly), [assembly]);

  const totalSum = useMemo(() => getAverageSum(assembly), [assembly]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Box className={styles.sideSection}>
      <Typography gutterBottom variant="h2">
        Your Build
      </Typography>
      <Paper>
        <Box className={styles.wrapper}>
          {isAssemblyEmpty ? (
            <Typography className={styles.emptyTitle}>
              Your build is empty
            </Typography>
          ) : (
            Object.keys(assembly).map(
              (category) =>
                assembly[category as CategoryName] && (
                  <AssemblyPart
                    category={category as CategoryName}
                    key={category}
                  />
                ),
            )
          )}
          <Box className={styles.totalWrapper}>
            <Typography className={styles.totalTitle}>Total:</Typography>
            <Typography className={styles.totalSum}>{totalSum} ₴</Typography>
          </Box>
          <Divider
            className={styles.divider}
            orientation="horizontal"
            variant="middle"
          />
          <Box display="flex" flexDirection="row">
            <Button
              color="secondary"
              variant="contained"
              fullWidth
              className={styles.button}
              disabled={!isAssemblySaveable}
              onClick={handleClickOpen}
            >
              Save
            </Button>
            <Button
              color="secondary"
              variant="outlined"
              fullWidth
              className={styles.button}
              onClick={() => dispatch(eraseAssembly())}
              disabled={isAssemblyEmpty}
            >
              Clear
            </Button>
            <AssemblySaveDialog
              open={open}
              setOpen={setOpen}
              total={totalSum}
            />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Assembly;
