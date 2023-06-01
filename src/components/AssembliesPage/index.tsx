import React from 'react';
import { Skeleton, Typography } from '@mui/material';

import useStyles from '../BuildScreen/styles';
import AssemblyItem from './AssemblyItem';
import useAssemblies from '../../hooks/useAssemblies';
import { FilledAssembly } from '../../../types';

const AssemblyPage: React.FC = () => {
  const userId = 'WUcAyK41gdXpWt6FTUq8XkPitit2';

  const { data: assemblies, isError, isLoading } = useAssemblies(userId);

  return (
    <div>
      <Typography variant="h1">Assemblies</Typography>
      {isLoading
        ? Array.from(new Array(2)).map((_, index) => (
            <Skeleton
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              animation="wave"
              width={1350}
              height={485}
              variant="rounded"
              style={{ marginTop: '80px' }}
            />
          ))
        : assemblies?.map((assembly: FilledAssembly) => (
            <AssemblyItem assembly={assembly} />
          ))}
    </div>
  );
};
export default AssemblyPage;
