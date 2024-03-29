import { SolidStateDrive, SpecBlock } from '../../types';

const formSSDSpecs = (product: SolidStateDrive): SpecBlock[] => [
  {
    name: 'Main',
    specs: [
      {
        title: 'Placement',
        value: product.placement,
      },
      {
        title: 'Capacity',
        value: product.capacity,
      },
      {
        title: 'Form factor',
        value: product.formFactor,
      },
      {
        title: 'M.2 interface',
        value: product.m2Interface,
      },
      {
        title: 'Controller',
        value: product.controller,
      },
      {
        title: 'Cache memory',
        value: product.cacheMemory,
      },
      {
        title: 'Memory type',
        value: product.memoryType,
      },
      {
        title: 'NVMe',
        value: product.nVMe,
      },
      {
        title: 'Write speed',
        value: product.writeSpeed,
      },
      {
        title: 'Read speed',
        value: product.readSpeed,
      },
      {
        title: 'MTBF',
        value: product.MTBF,
      },
      {
        title: 'Write IOPS',
        value: product.writeIOPS,
      },
      {
        title: 'Read IOPS',
        value: product.readIOPS,
      },
      {
        title: 'TBW',
        value: product.TBW,
      },
      {
        title: 'TRIM',
        value: product.trim,
      },
      {
        title: 'Size',
        value: product.size,
      },
      {
        title: 'Weight',
        value: product.weight,
      },
    ],
  },
];

export default formSSDSpecs;
