import { TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import { Part } from '../../../../../types';

type ComparisonTableHeadProps = {
  parts: Part[];
};

const ComparisonTableHead: React.FC<ComparisonTableHeadProps> = ({ parts }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <Typography variant="h3">Properties</Typography>
        </TableCell>
        {parts.map((part: Part) => (
          <TableCell>
            <Typography variant="h3">{part.name}</Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default ComparisonTableHead;
