/* eslint-disable react/no-array-index-key */
import React, { useState, useContext } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { Link, generatePath } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useUser } from 'reactfire';
import { ROUTES } from '../../../common/constants';
import { AssemblyPartType, FilledAssembly } from '../../../../types';
import useStyles from './styles';
import Assemblies from '../../../api/assemblies';
import { UIContext } from '../../UIContext';
import QUERY_KEY_FACTORIES from '../../../common/queryKeyFactories';

type AssemblyItemProps = {
  assembly: FilledAssembly;
};

const AssemblyItem: React.FC<AssemblyItemProps> = ({ assembly }) => {
  const styles = useStyles();
  const [isDeleting, setIsDeleting] = useState(false);
  const { setAlert } = useContext(UIContext);
  const queryClient = useQueryClient();
  const { data: user } = useUser();

  const deleteAssembly = useMutation({
    mutationFn: (id: string) => Assemblies.delete(id),
    onSuccess: (data) => {
      if (data.status) {
        setAlert({
          show: true,
          severity: 'success',
          message: 'Assembly deleted',
        });
        queryClient.invalidateQueries(
          QUERY_KEY_FACTORIES.ASSEMBLIES.list(user?.uid),
        );
      }
    },
  });

  const handleDeleteAssembly = () => {
    setIsDeleting(true);
    // eslint-disable-next-line no-underscore-dangle
    deleteAssembly.mutate(assembly._id);
  };

  return (
    <Box position="relative">
      <Box display="flex" marginBottom="10px" marginLeft="15px">
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
            {assembly?.parts.map((part) => (
              <Box display="flex" justifyContent="center" key={part.id}>
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
          gap="50px"
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
                fontSize: '20px',
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
        <Button
          sx={{
            position: 'absolute',
            right: '30px',
            bottom: '30px',
            color: 'red',
          }}
          disabled={isDeleting}
          variant="outlined"
          onClick={handleDeleteAssembly}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};
export default AssemblyItem;
