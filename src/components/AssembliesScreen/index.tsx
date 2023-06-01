import React, { useEffect } from 'react';
import { Skeleton, Typography } from '@mui/material';
import { useUser } from 'reactfire';
import { useNavigate } from 'react-router-dom';
import AssemblyItem from './AssemblyItem';
import useAssemblies from '../../hooks/useAssemblies';
import { FilledAssembly } from '../../../types';

const AssembliesScreen: React.FC = () => {
  const {
    data: { uid: userId },
  } = useUser();

  const { data: assemblies, isError, isLoading } = useAssemblies(userId);

  const navigate = useNavigate();
  useEffect(() => {
    if (isError) navigate('/');
  }, [isError, navigate]);

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
export default AssembliesScreen;
