import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { useUser } from 'reactfire';
import AssemblyItem from './AssemblyItem';
import useAssemblies from '../../hooks/useAssemblies';
import { FilledAssembly } from '../../../types';

const AssembliesScreen: React.FC = () => {
  const { data: user } = useUser();
  const userId = user?.uid;
  const { data: assemblies, isLoading } = useAssemblies(userId);

  return (
    <>
      <Box marginBottom="20px" marginTop="20px">
        {isLoading ? (
          <Skeleton
            animation="wave"
            variant="text"
            width={800}
            sx={{ height: '80px', marginLeft: '257px' }}
          />
        ) : (
          <Typography
            variant="h4"
            sx={{ fontWeight: 400, marginLeft: '257px' }}
          >
            My assemblies: {assemblies?.length}
          </Typography>
        )}
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width="100%"
        gap="20px"
        marginBottom="20px"
      >
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          gap="30px"
        >
          {isLoading ? (
            <>
              <Skeleton
                animation="wave"
                variant="text"
                width={800}
                sx={{ height: '50px' }}
              />
              {Array.from(new Array(2)).map((_, index) => (
                <Skeleton
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  animation="wave"
                  width="100%"
                  height={350}
                  variant="rounded"
                />
              ))}
            </>
          ) : (
            assemblies?.map((assembly: FilledAssembly) => (
              // eslint-disable-next-line react/no-array-index-key
              // eslint-disable-next-line no-underscore-dangle
              <AssemblyItem assembly={assembly} key={assembly._id} />
            ))
          )}
        </Box>
      </Box>
    </>
  );
};
export default AssembliesScreen;
