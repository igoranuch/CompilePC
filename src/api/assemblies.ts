import { CreatedAssembly } from '../../types/index';
import functions from '../common/firebaseFunctons';

const Assemblies = {
  get: async (id: string): Promise<CreatedAssembly> => {
    const getAssembly = functions.httpsCallable('getAssembly');
    const { data: assembly }: { data: CreatedAssembly } = await getAssembly({
      id,
    });
    return assembly;
  },
  list: async (userId: string): Promise<CreatedAssembly[]> => {
    const getAssemblies = functions.httpsCallable('getAssemblies');
    const { data: result } = await getAssemblies({ userId });
    return result;
  },
  create: async (assembly: CreatedAssembly) => {
    const insertAssembly = functions.httpsCallable('insertAssembly');
    const { data: assemblyId } = await insertAssembly(assembly);
    return assemblyId;
  },
};

export default Assemblies;
