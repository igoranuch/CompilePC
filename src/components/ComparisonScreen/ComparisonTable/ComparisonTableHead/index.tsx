/* eslint-disable react/no-array-index-key */
import {
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Box,
  Tooltip,
} from '@mui/material';
import React from 'react';
import { Link, generatePath } from 'react-router-dom';
import { CategoryName, Part } from '../../../../../types';
import { ROUTES, IconByCategory } from '../../../../common/constants';
import useStyles from './styles';

type ComparisonTableHeadProps = {
  parts: Part[];
  category: CategoryName;
};

const ComparisonTableHead: React.FC<ComparisonTableHeadProps> = ({
  parts,
  category,
}) => {
  const styles = useStyles();

  const Icon = IconByCategory[category];

  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <Box className={styles.propertiesBox}>
            <Icon />
            <Typography variant="h3">Properties</Typography>
          </Box>
        </TableCell>
        {parts.map((part: Part, index) => (
          <TableCell key={index}>
            <Box className={styles.headCellBox}>
              <Link
                style={{ textDecoration: 'none' }}
                to={generatePath(ROUTES.PRODUCT, { category, id: part.id })}
              >
                <Tooltip title={part.name}>
                  <Typography variant="h3" className={styles.linkText}>
                    {part.name}
                  </Typography>
                </Tooltip>
              </Link>
              <Typography variant="h3" color="secondary">
                {`${part.price.range.minPrice.toLocaleString()} ₴ -
                ${part.price.range.maxPrice.toLocaleString()} ₴`}
              </Typography>
            </Box>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default ComparisonTableHead;
