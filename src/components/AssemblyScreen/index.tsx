import React from 'react';
import { useUser } from 'reactfire';
import useAssemblies from '../../hooks/useAssemblies';

const AssemblyScreen = () => {
  // const { id } = useParams();

  const { data } = useUser();

  const userId = data.uid;

  const { data: assemblies, isError, isLoading } = useAssemblies(userId);

  console.log(assemblies);

  return <div>biba</div>;
};

export default AssemblyScreen;
