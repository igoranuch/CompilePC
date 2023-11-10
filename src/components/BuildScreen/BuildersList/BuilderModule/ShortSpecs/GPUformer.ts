import { GraphicsCard, ShortSpec } from '../../../../../../types/index';

const GPUformer = (product: GraphicsCard): ShortSpec[] => [
  { name: 'Memory', value: `${product.memorySize}, ${product.memoryType}` },
  { name: 'GPU Model', value: product.GPUModel },
  {
    name: 'Connectors',
    value: `HDMI ${product.HDMI}, DisplayPort ${product.displayPort || 0}`,
  },
];

export default GPUformer;
