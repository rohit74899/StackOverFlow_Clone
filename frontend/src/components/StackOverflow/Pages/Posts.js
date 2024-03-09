import { Container } from '@mui/material'
import React, { useState } from 'react'

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { green } from '@mui/material/colors';
import Typography from '@mui/material/Typography';


// new 
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import stack from '@mui/material/Stack';
const Posts = () => {

    const [bt,setbt]=useState(0);


    const code1=["Post 1 Code","Post 2 code","post 3 code"];

    const tags=['c++',"DSA","Complexity"];

    const data={
        "posts":[
            {
                "Title": "Merge Sort - Data Structure and Algorithms Tutorials",
                "Date":"12 jan 2024",
                "code": "Post 1 code",
                "Body": "Post 1 Content Here amet consectetur adipisicing elit.Ab molestiae et ad ullam repellendus accusamus odit pariatur incidunt? Assumenda possimus facilis, atque minima praesentium veniam aliquam molestias, labore, quidem nam ducimus modi!",
                "Tags": ["c++", "DSA", "On2"]
            },
            {
                "Title": "Quick Sort",
                "Date":"13 jab 2024",
                "code": "Post 2 code",
                "Body": "Post 2 Content Here sit amet consectetur adipisicing elit. Ab molestiae et ad ullam repellendus accusamus odit pariatur incidunt? Assumenda possimus facilis, atque minima praesentium veniam aliquam molestias, labore, quidem nam ducimus modi!",
                "Tags": ["c++", "DSA", "Complexity"]
            },
            {
                "Title": "Linear Search",
                "Date":"12 feb 2024",
                "code": "Post 4 code",
                "Body": "Post 4 Content Here sit amet consectetur adipisicing elit. Ab molestiae et ad ullam repellendus accusamus odit pariatur incidunt? Assumenda possimus facilis, atque minima praesentium veniam aliquam molestias, labore, quidem nam ducimus modi!",
                "Tags": ["DSA"]
            },
            {
                "Title": "Heap Sort",
                "Date":"3 march 2024",
                "code": "Post 5 code",
                "Body": "Post 5 Content Here sit amet consectetur adipisicing elit. Ab molestiae et ad ullam repellendus accusamus odit pariatur incidunt? Assumenda possimus facilis, atque minima praesentium veniam aliquam molestias, labore, quidem nam ducimus modi!",
                "Tags": ["DSA"]
            },
            {
                "Title": "Binary Tree Implementation",
                "Date":"4 feb 2024",
                "code": "Post 6 code",
                "Body": "Post 6 Content Here sit amet consectetur adipisicing elit. Ab molestiae et ad ullam repellendus accusamus odit pariatur incidunt? Assumenda possimus facilis, atque minima praesentium veniam aliquam molestias, labore, quidem nam ducimus modi!",
                "Tags": ["DSA"]
            },
        ]
    
    }
        
    
            
  return (
    <>
      
            <Stack direction="row" spacing={2}>
                <button onClick={()=>setbt(0)}>
                    Questions 
                </button>
                <button onClick={()=>setbt(1)}>
                    Posts
                </button>
                
            </Stack>

            {
                bt===1? (
                    data.posts.map((post, index) => (
                        <div key={index}>
                                  <Accordion >
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    >
                                    <Stack direction="row" spacing={2}>
                                    <Typography>{post.Title}</Typography>
                                    <Typography variant="caption" display="block" gutterBottom>({post.Date})</Typography>
                                    </Stack>
                                    
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <>
                                                    <Container fixed>
                                                        
            
                                                        <Paper elevation={0}>
                                                                <Typography variant="h4" gutterBottom>
                                                                {post.Title}
                                                                </Typography>
                                                                <div
                                                                        style={{
                                                                        display: "flex",
                                                                        }}
                                                                    >
                                                                        {post.Tags.map((_tag) => (
                                                                        <p
                                                                            style={{
                                                                            margin: "10px 5px",
                                                                            padding: "5px 10px",
                                                                            backgroundColor: "#007cd446",
                                                                            borderRadius: "3px",
                                                                            }}
                                                                        >
                                                                            {_tag}
                                                                        </p>
                                                                        ))}
                                                                </div>
                                                                <Typography variant="H6" gutterBottom>
                                                                {post.Body}
                                                                </Typography>
                                                        </Paper>
                                                        <Paper elevation={1}>
                                                                
                                                                <Box sx={{ bgcolor: 'black', color:'green'}} >
                                                                    
            
                                                                    {post.code}
            
            
                                                                </Box>
                                                                
                                                        </Paper>
                                                    
                                                </Container>
                                        </>
                                    
                                    </AccordionDetails>
                            </Accordion>
                  
                        </div>
                    ))
                ):<>You havent Asked Question!!!</>
            }
      
      
    </>
  )
}

export default Posts
