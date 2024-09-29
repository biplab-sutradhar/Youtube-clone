import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

 
const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius:  '9999px 0 0 9999px', 
    backgroundColor: 'rgba(174, 255, 0, 0.3)', 
    border: 'none',  
     height: '50px', 
    '& .MuiInputBase-input': {
      height: '28px', 
    },
  },
});

const SearchAutocomplete = ({ searchQ, setSearch, suggestions }) => {
  return (
    <Autocomplete
      freeSolo
      disableClearable
      options={suggestions.map((option) => option)}
      onChange={(event, newValue) => {
        setSearch(newValue);
      }}
      inputValue={searchQ}
      onInputChange={(event, newInputValue) => {
        setSearch(newInputValue);
      }}
      renderInput={(params) => (
        <CustomTextField 
          {...params}
          variant="outlined"
          InputProps={{ ...params.InputProps, type: 'search' }}
        />
      )}
      className="w-96 mb-6"
    />
  );
};

export default SearchAutocomplete;
