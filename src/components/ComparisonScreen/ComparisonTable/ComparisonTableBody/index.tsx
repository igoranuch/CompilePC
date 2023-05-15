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
      {specs.map((spec) => (
        <ComparisonTableRow spec={spec} />
      ))}
    </TableBody>
  );
};

export default ComparisonTableBody;
