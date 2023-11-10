import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useContext } from 'react';
import { FilledAssembly } from '../../types/index';
import { UIContext } from '../components/UIContext';
import QUERY_KEY_FACTORIES from '../common/queryKeyFactories';
import Assemblies from '../api/assemblies';

const useAssembly = (id: string): UseQueryResult<FilledAssembly> => {
  const { setAlert } = useContext(UIContext);

  return useQuery(
    QUERY_KEY_FACTORIES.ASSEMBLIES.get(id),
    () => Assemblies.get(id),
    {
      onError: () =>
        setAlert({
          show: true,
          severity: 'error',
          message: `No assembly found.`,
        }),
    },
  );
};

export default useAssembly;
