import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AddCardIcon from '@mui/icons-material/AddCard';
import PostAddIcon from '@mui/icons-material/PostAdd';


// new Components Added
import axios from "axios";
import { Container } from '@mui/material';
import Nsidebar from "./Nsidebar"
import Grid from '@mui/material/Grid';
import {  useEffect, useState } from "react";
import Sidebar from './Sidebar';
import Main from './Main';
import { blue } from '@material-ui/core/colors';
import Autocomplete from '@mui/material/Autocomplete';

import TextField from '@mui/material/TextField';

// New Component Test
import { Link } from "react-router-dom";
import Tags from './Pages/Tags'
import Home from './Pages/Home';
import Questions from './Pages/Questions'
import Community from './Pages/Community';
import Users from './Pages/Users'
import Posts from './Pages/Posts'

import FilterTag from './FilterTags/FilterTag';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 210;

export default function ClippedDrawer({questions,posts}) {
  
  console.log(questions);
  console.log(posts);

  
  // for prefere Tags input
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
  
// ******************************************************


  // const [page, setPage] = useState('Home');
  const [page, setpage] = useState('Home'); 
  const [tag, setTag] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState(questions);

  const handleTagChange = (value) => {
    setTag(value);
  };

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };



  const handleSearchClick = () => {
    // Perform the search only when the submit button is clicked
              console.log("Selected Tags:", tag);
              console.log("Search Input:", searchInput);
              console.log("Selected Tags:", tag);
              console.log("predered tags selected",selectedTags);
              
              if (searchInput.trim() === '' && selectedTags.length === 0 ) {
                // If both search input and tags are empty, display all questions
                  setFilteredQuestions(questions);
              } else {
                // Perform the search only when the submit button is clicked
                const formattedTag = JSON.stringify(selectedTags);
                console.log("tags we get as input", formattedTag);
                const arrayOfStrings = JSON.parse(formattedTag);
                console.log(arrayOfStrings[0]);


                const filtered = questions.filter((question) => {
                          // Log the tags for debugging
                          console.log("Question Tags:", question.tags);

                          // Assuming you are only selecting one tag at a time
                          // Parse the tags if stored as a stringified array
                          const questionTags =
                              typeof question.tags === 'string' ? JSON.parse(question.tags) : question.tags;

                          console.log("Parsed Question Tags:", questionTags);
                          console.log(questionTags[0]);
                          // Check for the existence of the tag
                          const hasTag =
                              selectedTags.length === 0 || questionTags[0].includes(arrayOfStrings[0]);

                          const matchesSearch =
                              searchInput.trim() === '' ||
                              question.title.toLowerCase().includes(searchInput.toLowerCase()) ||
                              question.body.toLowerCase().includes(searchInput.toLowerCase()) ||
                              questionTags.some((questionTag) => questionTag.toLowerCase().includes(searchInput.toLowerCase()));

                          return hasTag && matchesSearch;
                  });

                // Output the filtered results for further inspection
                console.log("Filtered Questions:", filtered);
                console.log("Filtered Questions After Setting State:", filtered);
                setFilteredQuestions(filtered); 
              }

  
  };

  useEffect(() => {
    console.log("Filtered Questions After Setting State:", filteredQuestions);
  }, [filteredQuestions]);


  return (

    <Grid container spacing={2}>
        
        <Grid item xs={2}>
                {/* <CssBaseline /> */}
                
                    <Drawer
                        variant="permanent"
                        sx={{
                        
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' ,backgroundColor:blue[400]},
                        }}
                        
                    >
                    <Toolbar />
                    {/* <Sidebar />    */}
                     <Nsidebar onPageChange={setpage}/>
                    </Drawer>
                
        </Grid>
        
        <Grid item xs={8} >
                
        <Toolbar />

        {page === 'Home' ? (
          <Main questions={filteredQuestions} searchInput={searchInput} />
        ) : page === 'FilteredQ' ? (
          <Main questions={filteredQuestions} tags={tag} searchInput={searchInput} />
        ) : page === 'Community' ? (
          <Community searchInput={searchInput} />
        ) : page === 'Tags' ? (
          <Tags searchInput={searchInput} />
        ) : page === 'Questions' ? (
          <Main questions={filteredQuestions} searchInput={searchInput} />
        ) : page === 'Users' ? (
          <Users searchInput={searchInput} />
        ): page === 'Posts' ? (
          <Posts searchInput={searchInput} posts={posts}/>
        ) : null}
                
                       
        </Grid>
        <Grid item xs={2} sx={{marginTop:18}}>
          
          
          {/* <FilterTag onTagsChange={handleTagChange} onSearchChange={handleSearchChange} onSearchClick={handleSearchClick}/> */}
          
            {/* page!='Tags' || page!='Users' || page!='Community'?( */}

        {page==='Tags' || page==='Users'? (
              null
        ) :page==='Posts'?(
        
        <Stack>
          Add a Post 
          <Link to="/add-post">
          
          <button><PostAddIcon/></button>
          
          </Link>
        </Stack>
        
        
        ):
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
      <Button variant="contained" endIcon={<SearchIcon />} sx={{ marginLeft: 0, marginTop: 2 }} onClick={() => handleSearchClick('FilteredQ')}>All Q</Button>
      <Button variant="contained" endIcon={<SearchIcon />} sx={{ marginLeft: 4, marginTop: 2 }} onClick={() => handleSearchClick('FilteredQ')}></Button>

      </>}
            
              
            
          
                  
          

          
          {

            // This is important should not be removed even though it has no use
            page==='xxxx'?(
              <>
              <input
                type="text"
                placeholder="Enter tags"
                value={tag.join(',')}
                onChange={(e) => setTag(e.target.value.split(','))}
                style={{ marginTop: '10px', width: '80%', padding: '5px' }}
              />
              
              <button onClick={handleSearchClick} style={{ marginTop: '10px', padding: '5px' }}>
                Search
              </button>
              </>
              
            ):null
          }
          


        
        
        </Grid>
    
    </Grid>


    
    
  );
}