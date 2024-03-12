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

import { useSelector } from 'react-redux';
// import { selectUser } from '../../redux/userSlice';
import { selectUser } from "../../../feature/userSlice";

const Posts = ({posts,questions}) => {

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    console.log(posts);

    // To get the current user
    const currentUser = useSelector(selectUser);
    console.log(currentUser);
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
                ):questions.filter((que) => que.user.uid === currentUser.uid).map((que, index) => (
                    <div key={index}>
                              <Accordion >
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                >
                                <Stack direction="row" spacing={2}>
                                <Typography>{que.title}</Typography>
                                <Typography variant="caption" display="block" gutterBottom>({que.created_at})</Typography>
                                <Typography variant="caption" display="block" gutterBottom>{que.user.email.split('@')[0]}</Typography>
                                </Stack>
                                
                                </AccordionSummary>
                                <AccordionDetails>
                                    <>
                                        <Container fixed>
                                                    
        
                                                <Paper elevation={0}>
                                                            <Typography variant="h4" gutterBottom>
                                                            {que.title}
                                                            </Typography>
                                                            <div
                                                                    style={{
                                                                    display: "flex",
                                                                    }}
                                                                >
                                                                    {JSON.parse(que.tags[0]).map((_tag) => (
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
                                                            {ReactHtmlParser((que.body))}
                                                            </Typography>
                                                    </Paper>
                                                    
                                                
                                            </Container>
                                    </>
                                
                                </AccordionDetails>
                        </Accordion>
              
                    </div>
                ))
            
            }
            
       
      
    </>
  )
}

export default Posts
