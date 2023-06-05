/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { Link, generatePath } from 'react-router-dom';
import { ROUTES } from '../../../common/constants';
import { AssemblyPartType, FilledAssembly } from '../../../../types';
import useStyles from './styles';

type AssemblyItemProps = {
  assembly: FilledAssembly;
};

const AssemblyItem: React.FC<AssemblyItemProps> = ({ assembly }) => {
  const styles = useStyles();

  return (
    <Box>
      <Box display="flex" marginBottom="10px">
        <Link
          style={{ textDecoration: 'none' }}
          to={generatePath(ROUTES.ASSEMBLY, {
            // eslint-disable-next-line no-underscore-dangle
            id: assembly._id,
          })}
        >
          <Typography className={styles.typo} variant="h4">
            {assembly.name}
          </Typography>
        </Link>
      </Box>
      <Box className={styles.contentBox}>
        <Box display="flex">
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
        </Box>
        <Box
          display="flex"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
          >
            <Box display="flex" paddingLeft="40px" width="100%">
              <Typography variant="h4">Assembly parts:</Typography>
            </Box>
            <ul
              style={{
                fontSize: '25px',
              }}
            >
              {assembly.parts.map((item: AssemblyPartType, index) => {
                return <li key={index}>{item.name}</li>;
              })}
            </ul>
          </Box>
          <Box className={styles.priceBox}>
            <Typography variant="h4">{assembly.price} ₴ </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default AssemblyItem;
