import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useContext } from 'react';
import { CreatedAssembly } from '../../types/index';
import { UIContext } from '../components/UIContext';
import QUERY_KEY_FACTORIES from '../common/queryKeyFactories';
import Assemblies from '../api/assemblies';

const useAssembly = (id: string): UseQueryResult<CreatedAssembly> => {
  const { setAlert } = useContext(UIContext);

  return useQuery(
    QUERY_KEY_FACTORIES.ASSEMBLIES.get(id),
    () => Assemblies.get(id),
    {
      onError: () =>
        setAlert({
          show: true,
          severity: 'error',
          message: `Could not fetch assembly. Try again later.`,
        }),
    },
  );
};

export default useAssembly;
