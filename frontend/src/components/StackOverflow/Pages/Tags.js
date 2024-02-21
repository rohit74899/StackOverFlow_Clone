import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { alignProperty } from '@mui/material/styles/cssUtils';
import Container from '@mui/material/Container';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


    const TagsData = [
        { name: "DSA", data: "Data Structures and Algorithms (DSA) are fundamental concepts in computer science, focusing on the organization and manipulation of data to efficiently solve computational problems. DSA plays a key role in designing efficient algorithms and optimizing code for various applications.", Qcount: "50" },
        { name: "OOP", data: "Object-Oriented Programming (OOP) is a programming paradigm that uses objects, classes, and their interactions to design and organize code. It promotes concepts such as encapsulation, inheritance, and polymorphism, fostering code reusability, modularity, and maintainability.and maintainability.", Qcount: "75" },
        { name: "Searching techniques", data: "Searching techniques refer to algorithms designed to find a specific item or value in a collection of data. Common searching algorithms include linear search, binary search, and hash-based search methods, each with its own advantages and use cases.and maintainability.and maintainability.", Qcount: "30" },
        { name: "Error", data: "Error handling is a crucial aspect of programming that involves detecting, managing, and resolving errors or exceptions in a program. Proper error handling enhances code robustness and user experience by gracefully handling unexpected situations.and maintainability.", Qcount: "42" },
        { name: "NodeJS", data: "Node.js is a server-side JavaScript runtime environment that allows developers to build scalable and high-performance network applications. It leverages the V8 JavaScript engine and is well-suited for building real-time applications and APIs.", Qcount: "120" },
        { name: "React", data: "React is a JavaScript library for building user interfaces, developed and maintained by Facebook. It follows a component-based architecture, enabling developers to create reusable UI components for building interactive .", Qcount: "200" },
        { name: "Express", data: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies the process of creating APIs and handling HTTP requests in Node.js ", Qcount: "90" },
        { name: "JQuery", data: "jQuery is a fast, small, and feature-rich JavaScript library. It simplifies tasks like HTML document traversal and manipulation, event handling, and animation, making it easier for developers to create dynamic and interactive web pages.", Qcount: "101" }
    ];
    
const Tags = () => {

    
  return (
    <Container>
        <Typography variant="h6" gutterBottom>
            Tags
        </Typography>
        

        <Typography variant="body2" gutterBottom>
            A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.
        </Typography>
        <Grid container spacing={2}>
        
        {
            TagsData.map((topic)=>(
                <Grid item xs={3}>

                <Card variant="outlined">

                    
                    <CardContent>
                    
                
                    <Stack spacing={2}>
                    <Typography variant="h6" gutterBottom >
     
                        <Chip label={topic.name}  clickable/>
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                            {topic.data}
                    </Typography>
                    </Stack>
                    <Grid container spacing={2}>
                            <Grid item xs={4}> 
                            <Typography variant="caption" display="block" gutterBottom>
                                Total Questions {topic.Qcount}    
                            </Typography>
                            
                            </Grid>
                            <Grid item xs={8}> 
                            <Typography variant="caption" display="block" gutterBottom>
                                Total Questions    
                            </Typography>
                            </Grid>
                    </Grid>
                    </CardContent>
                </Card>  
        </Grid>
            ))
        }
        
        
        
      </Grid>
        
    </Container>
    
  )
}

export default Tags
