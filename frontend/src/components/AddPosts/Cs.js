import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const CustomIndex = ({ onTagsChange }) => {
  const [tags, setTags] = useState(["c++", "java", "npm", "error", "DSA","JDK","DP","NodeJs","Maths","Marathi","Hindi"]);

  return (
    <Autocomplete
      multiple
      limitTags={5}
      id="multiple-limit-tags"
      options={tags}
      getOptionLabel={(option) => option}
      defaultValue={[]}
      renderInput={(params) => (
        <TextField {...params} label="limitTags" placeholder="Favorites" />
      )}
      onChange={(_, newValue) => onTagsChange(newValue)}
      sx={{ width: '500px' }}
    />
  );
};

export default CustomIndex;
