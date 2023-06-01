/* eslint-disable react/no-array-index-key */
import * as React from 'react';

import { Box, Paper, Typography, Skeleton } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { useUser } from 'reactfire';
import Carousel from 'react-material-ui-carousel';
import { Link, generatePath } from 'react-router-dom';
import useAssemblies from '../../../hooks/useAssemblies';
import useStyles from './styles';
import { AssemblyPartType, FilledAssembly } from '../../../../types';
import { ROUTES } from '../../../common/constants';

type AssemblyItemProps = {
  assembly: FilledAssembly;
};

const AssemblyItem: React.FC<AssemblyItemProps> = ({ assembly }) => {
  const styles = useStyles();

  return (
    <>
      <Box className={styles.titleBox}>
        <Link
          style={{ textDecoration: 'none' }}
          to={generatePath(ROUTES.ASSEMBLY, {
            // eslint-disable-next-line no-underscore-dangle
            id: assembly._id,
          })}
        >
          <Typography className={styles.typo} variant="h3">
            {assembly.name}
          </Typography>
        </Link>
      </Box>
      <Box className={styles.mainBox}>
        <Box className={styles.leftBlock}>
          <Paper
            sx={{
              maxWidth: 'auto',

              backgroundColor: '#282828',
              boxShadow: 'none',
            }}
          >
            <Box className={styles.contentBox}>
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
                  <Box display="flex" justifyContent="center">
                    <img
                      key={index}
                      className={styles.carouselImage}
                      alt={part.name}
                      src={part.mainImage}
                    />
                  </Box>
                ))}
              </Carousel>
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                  gap="15px"
                  marginRight="50px"
                >
                  <Typography gutterBottom variant="h4" component="div">
                    assembly composition
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <ul
                      style={{
                        paddingLeft: '50px',
                        marginBottom: 0,
                        fontSize: '25px',
                      }}
                    >
                      {assembly.parts.map((item: AssemblyPartType) => {
                        return <li>{item.name}</li>;
                      })}
                    </ul>
                  </Typography>
                </Box>
                <Box className={styles.priceBox}>
                  <Typography variant="h4">{assembly.price} ₴ </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};
export default AssemblyItem;
