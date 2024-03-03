
import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';
const FilterTag = ({ onTagsChange, onSearchClick }) => {
    const [ptags, setpTags] = useState(["c++", "java", "npm", "error", "DSA","JDK","DP","NodeJs","Maths","Marathi","Hindi"]);
    const [selectedTags, setSelectedTags] = useState([]);

  const handleTagChange_ForPreferedTags = (_, newValue) => {
    // Update the selected ptags without triggering onTagsChange immediately
    // console.log("value",newValue);
    setSelectedTags(newValue);
  };

  const handleSearchClick_ForPreferedTags = () => {
    console.log(selectedTags);
    console.log("filterTag page");
  };
  return (
    <>
    <Stack direction="row" spacing={1}>
      <Autocomplete
        multiple
        limitTags={2}
        id="single-limit-tags"
        options={ptags}
        getOptionLabel={(option) => option}
        defaultValue={[]}
        renderInput={(params) => (
          <TextField {...params} label="search" placeholder="Search by Tags" />
        )}
        onChange={handleTagChange_ForPreferedTags}
        sx={{ width: '200px' }}
      />
      
    </Stack>
    <Button variant="contained" endIcon={<SearchIcon />} sx={{ marginLeft: 8, marginTop: 2 }} onClick={() => handleSearchClick_ForPreferedTags('FilteredQ')}>
        
      </Button>
    </>
    
    
  )
}

export default FilterTag


