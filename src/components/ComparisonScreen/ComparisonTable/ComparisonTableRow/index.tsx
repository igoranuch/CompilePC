/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { TableCell, TableRow, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { CategorySpec } from '../../../../../types';
import useStyles from './styles';

type ComparisonTableRowProps = {
  spec: CategorySpec;
};

const ComparisonTableRow: React.FC<ComparisonTableRowProps> = ({ spec }) => {
  const styles = useStyles();

  return (
    <TableRow>
      <TableCell height="65px">
        <Typography variant="h6">{spec.title}</Typography>
      </TableCell>
      {spec.values.map((value, index) => (
        <TableCell key={index}>
          <Typography variant="h6">
            {Array.isArray(value) ? (
              value.join(', ')
            ) : typeof value === 'boolean' ? (
              <CheckIcon className={styles.checkIcon} />
            ) : (
              value
            )}
          </Typography>
        </TableCell>
      ))}
    </TableRow>
  );
};

export default ComparisonTableRow;
