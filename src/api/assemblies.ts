import { FullAssembly } from '../../types/index';
import functions from '../common/firebaseFunctons';

const Assemblies = {
  get: async (id: string): Promise<FullAssembly> => {
    const getAssembly = functions.httpsCallable('getAssembly');
    const { data } = await getAssembly({
      id,
    });
    return data as FullAssembly;
  },
  list: async (userId: string): Promise<Response> => {
    const getAssemblies = functions.httpsCallable('getAssemblies');
    const { data: result } = await getAssemblies({ userId });
    return result;
  },
  create: async () => {},
};

export default Assemblies;
