/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Paper, Typography, Skeleton } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import useAssembly from '../../hooks/useAssembly';
import AssemblyPart from './AssemblyPart';
import { AssemblyPartType } from '../../../types';
import useStyles from './styles';

const AssemblyScreen = () => {
  const { id } = useParams();
  const styles = useStyles();
  const navigate = useNavigate();

  const { data: assembly, isError, isLoading } = useAssembly(id as string);

  useEffect(() => {
    if (isError) navigate('/');
  }, [isError, navigate]);

  return (
    <Box className={styles.container}>
      <Typography variant="h1">
        {isLoading ? (
          <Skeleton animation="wave" variant="text" width={800} />
        ) : (
          assembly?.name
        )}
      </Typography>
      <Box className={styles.contentBox}>
        {isLoading ? (
          <Skeleton
            animation="wave"
            width={600}
            height={600}
            variant="rounded"
          />
        ) : (
          <Carousel
            swipe={false}
            fullHeightHover
            animation="fade"
            className={styles.carousel}
            indicatorContainerProps={{
              style: {
                position: 'absolute',
                bottom: 10,
              },
            }}
          >
            {assembly?.parts.map((part, index) => (
              <Box display="flex" justifyContent="center" key={index}>
                <img
                  className={styles.carouselImage}
                  alt={part.name}
                  src={part.mainImage}
                />
              </Box>
            ))}
          </Carousel>
        )}
        <Box className={styles.partsContainer}>
          {isLoading
            ? Array.from(new Array(8)).map((_, index) => (
                <Skeleton
                  key={index}
                  animation="wave"
                  width={830}
                  height={90}
                  variant="rounded"
                />
              ))
            : assembly?.parts.map((part, index) => (
                <AssemblyPart key={index} product={part as AssemblyPartType} />
              ))}
        </Box>
      </Box>
      <Typography variant="h4" gutterBottom sx={{ marginTop: '20px' }}>
        Description
      </Typography>
      <Paper className={styles.descriptionPaper}>
        {isLoading ? (
          Array.from(new Array(5)).map((_, index) => (
            <Skeleton variant="text" animation="wave" key={index} />
          ))
        ) : (
          <Typography className={styles.description}>
            {assembly?.description}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default AssemblyScreen;
