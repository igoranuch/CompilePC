import React from 'react';
import { TableBody } from '@mui/material';
import { CategorySpec } from '../../../../../types';
import ComparisonTableRow from '../ComparisonTableRow';

type ComparisonTableBodyProps = {
  specs: CategorySpec[];
};

const ComparisonTableBody: React.FC<ComparisonTableBodyProps> = ({ specs }) => {
  return (
    <TableBody>
      {specs.map((spec, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ComparisonTableRow spec={spec} key={index} />
      ))}
    </TableBody>
  );
};

export default ComparisonTableBody;
