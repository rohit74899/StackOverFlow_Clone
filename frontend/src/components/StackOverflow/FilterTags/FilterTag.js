
import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';
const FilterTag = ({ onTagsChange, onSearchClick }) => {
    const [tags, setTags] = useState(["c++", "java", "npm", "error", "DSA","JDK","DP","NodeJs","Maths","Marathi","Hindi"]);
    const [selectedTags, setSelectedTags] = useState([]);

  const handleTagChange = (_, newValue) => {
    // Update the selected tags without triggering onTagsChange immediately
    console.log("value",newValue);
    setSelectedTags(newValue);
  };

  const handleSearchClick = () => {
    console.log("filterTag page");
  };
  return (
    <>
    <Stack direction="row" spacing={1}>
      <Autocomplete
        multiple
        limitTags={2}
        id="single-limit-tags"
        options={tags}
        getOptionLabel={(option) => option}
        defaultValue={[]}
        renderInput={(params) => (
          <TextField {...params} label="search" placeholder="Search by Tags" />
        )}
        onChange={handleTagChange}
        sx={{ width: '200px' }}
      />
      
    </Stack>
    <Button variant="contained" endIcon={<SearchIcon />} sx={{ marginLeft: 8, marginTop: 2 }} onClick={() => handleSearchClick('FilteredQ')}>
        
      </Button>
    </>
    
    
  )
}

export default FilterTag


