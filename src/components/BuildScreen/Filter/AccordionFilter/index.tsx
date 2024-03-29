import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Typography,
} from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import FilterItem from '../FilterItem';
import { Filter } from '../filters';
import { CompatibleFilter, SelectedFilter } from '../../../../../types';
import { selectCompatibleFilters } from '../../../../store/builder/selectors';

type AccordionFilterProps = {
  filter: Filter;
  addAccordionFilter: CallableFunction;
  selectedFilters: SelectedFilter | null;
  openedFilter: string | null;
  handleOpenFilter: (value: string) => void;
};

const AccordionFilter: React.FC<AccordionFilterProps> = ({
  filter,
  addAccordionFilter,
  selectedFilters,
  openedFilter,
  handleOpenFilter,
}) => {
  const styles = useStyles();

  const isSelected = Boolean(selectedFilters && selectedFilters[filter.key]);

  const DisplayReplace = () =>
    isSelected ? (
      <IconButton onClick={() => handleOpenFilter(filter.key)}>
        <SwapHorizIcon className={styles.greenIcon} />
      </IconButton>
    ) : (
      <IconButton onClick={() => handleOpenFilter(filter.key)}>
        <AddRoundedIcon className={styles.greenIcon} />
      </IconButton>
    );

  const compatibleObject = useSelector(selectCompatibleFilters);
  const isDisabled = Object.keys(compatibleObject).some((key) =>
    // eslint-disable-next-line no-prototype-builtins
    compatibleObject[key as keyof CompatibleFilter]?.hasOwnProperty(filter.key),
  );

  return (
    <Accordion
      className={styles.wrapper}
      expanded={openedFilter === filter.key}
      disabled={isDisabled}
    >
      <AccordionSummary
        className={styles.accordionSummary}
        expandIcon={
          openedFilter === filter.key ? (
            <IconButton onClick={() => handleOpenFilter(filter.key)}>
              <RemoveRoundedIcon className={styles.redIcon} />
            </IconButton>
          ) : (
            <DisplayReplace />
          )
        }
      >
        <Typography className={styles.title}>{filter.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {filter.options.map((option) => (
          <FilterItem
            option={option}
            filterKey={filter.key}
            addAccordionFilter={addAccordionFilter}
            selectedFilters={selectedFilters}
            key={option.key}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionFilter;
