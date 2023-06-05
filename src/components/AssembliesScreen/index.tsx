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
    <Box marginTop="20px" width="100%" height="100%">
      <Box marginBottom="20px">
        {isLoading ? (
          <Skeleton
            animation="wave"
            variant="text"
            width={800}
            sx={{ height: '80px' }}
          />
        ) : (
          <Typography variant="h4" sx={{ fontWeight: 400 }}>
            My assemblies {assemblies?.length}
          </Typography>
        )}
      </Box>
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
                width={1350}
                height={485}
                variant="rounded"
              />
            ))}
          </>
        ) : (
          assemblies?.map((assembly: FilledAssembly, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <AssemblyItem assembly={assembly} key={index} />
          ))
        )}
      </Box>
    </Box>
  );
};
export default AssembliesScreen;
