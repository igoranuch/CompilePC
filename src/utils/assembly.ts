import { Assembly, CategoryName } from '../../types';

const getAverageSum = (assembly: Assembly): number => {
  const minPrice = Object.keys(assembly).reduce((sum, key) => {
    const part = assembly[key as CategoryName];
    return part ? sum + part.price.range.minPrice : sum + 0;
  }, 0);

  const maxPrice = Object.keys(assembly).reduce((sum, key) => {
    const part = assembly[key as CategoryName];
    return part ? sum + part.price.range.maxPrice : sum + 0;
  }, 0);

  return Math.round((maxPrice + minPrice) / 2);
};

const isEmpty = (assembly: Assembly): boolean =>
  Object.values(assembly).every((part) => !part);

const isSaveable = (assembly: Assembly): boolean => {
  const {
    CPU,
    GPU,
    PSU,
    RAM,
    case: computerCase,
    motherboard,
    SSD,
    HDD,
  } = assembly;

  if (
    !CPU ||
    !PSU ||
    !RAM ||
    !computerCase ||
    !motherboard ||
    (SSD === null && HDD === null)
  ) {
    return false;
  }

  if (CPU.IGP && CPU.IGP !== 'is absent') {
    return true;
  }

  return GPU !== null;
};

export { getAverageSum, isEmpty, isSaveable };
