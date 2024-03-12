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


// 12 March
import ReactHtmlParser from "react-html-parser";


const Posts = ({posts}) => {

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    console.log(posts);

    const [bt,setbt]=useState(0);

            
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
                    posts.map((post, index) => (
                        <div key={index}>
                                  <Accordion >
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    >
                                    <Stack direction="row" spacing={2}>
                                    <Typography>{post.title}</Typography>
                                    <Typography variant="caption" display="block" gutterBottom>({post.created_at})</Typography>
                                    </Stack>
                                    
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <>
                                            <Container fixed>
                                                        
            
                                                    <Paper elevation={0}>
                                                                <Typography variant="h4" gutterBottom>
                                                                {post.title}
                                                                </Typography>
                                                                <div
                                                                        style={{
                                                                        display: "flex",
                                                                        }}
                                                                    >
                                                                        {JSON.parse(post.tags[0]).map((_tag) => (
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
                                                                {ReactHtmlParser((post.body))}
                                                                </Typography>
                                                        </Paper>
                                                        <Paper elevation={1}>
                                                                
                                                                <Box sx={{ bgcolor: 'black', color:'green'}} >
                                                                    
            
                                                                    {ReactHtmlParser((post.code))}
            
            
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
            {/* {
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
       */}
      
    </>
  )
}

export default Posts
