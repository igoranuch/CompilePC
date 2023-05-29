import React from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useStyles from './styles';

type SearchProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
};

const Search: React.FC<SearchProps> = ({ searchValue, handleChange }) => {
  const styles = useStyles();

  return (
    <Box className={styles.searchBar}>
      <TextField
        variant="standard"
        size="small"
        fullWidth
        autoComplete="off"
        placeholder="Search..."
        value={searchValue}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <SearchIcon className={styles.searchIcon} />
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
      />
    </Box>
  );
};

export default Search;
