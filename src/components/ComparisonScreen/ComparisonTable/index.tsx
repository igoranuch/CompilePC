import React from 'react';
import { Table, TableContainer } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectComparisonParts } from '../../../store/builder/selectors';
import { CategoryName, CategorySpec } from '../../../../types';
import ComparisonTableHead from './ComparisonTableHead';
import ComparisonTableBody from './ComparisonTableBody';
import getCategorySpecs from '../../../utils/getCategorySpecs';

type ComparisonTableProps = {
  category: CategoryName;
};

const ComparisonTable: React.FC<ComparisonTableProps> = ({ category }) => {
  const comparisonParts = useSelector(selectComparisonParts(category));

  const categorySpecs = getCategorySpecs(
    category,
    comparisonParts,
  ) as CategorySpec[];

  const filteredSpecs = categorySpecs.filter(
    (spec: CategorySpec) => !spec.values.every((value) => !value),
  );

  return (
    <TableContainer>
      <Table stickyHeader>
        <ComparisonTableHead parts={comparisonParts} category={category} />
        <ComparisonTableBody specs={filteredSpecs} />
      </Table>
    </TableContainer>
  );
};

export default ComparisonTable;
