import React from 'react';
import { CircularProgress, Box } from '@mui/material';
import useStyles from './styles';

const Loader = () => {
  const styles = useStyles();

  return (
    <Box className={styles.loaderContainer}>
      <CircularProgress className={styles.loader} />
    </Box>
  );
};

export default Loader;
