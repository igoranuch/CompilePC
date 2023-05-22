import React from 'react';
import { useParams } from 'react-router-dom';
import useAssembly from '../../hooks/useAssembly';

const AssemblyScreen = () => {
  const { id } = useParams();

  const { data: assembly, isError, isLoading } = useAssembly(id as string);

  console.log(assembly);

  return <div>biba</div>;
};

export default AssemblyScreen;
