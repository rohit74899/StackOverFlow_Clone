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
                "code": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, culpa soluta tempore deserunt saepe consequatur autem cupiditate excepturi dolore atque similique id voluptatum laudantium repellendus eum mollitia iure. Magni vero assumenda reprehenderit, in corporis eum, obcaecati at culpa blanditiis iste, exercitationem numquam odit aspernatur ratione suscipit? Pariatur perspiciatis alias eaque eum accusamus incidunt explicabo cupiditate similique odio magni minima praesentium est earum quam maxime voluptatum quis quod omnis unde neque enim, ipsam obcaecati perferendis quos. Voluptates molestias accusamus veniam repellendus error molestiae ex officia modi, cupiditate ducimus odio, voluptas dolores tenetur? Iste dolore eum fugiat doloremque? Nisi qui sunt deserunt totam, eum corrupti quibusdam fuga! Tenetur voluptates neque dolore maxime nisi minus, sed consequuntur non, reprehenderit eveniet perspiciatis officiis dignissimos optio ipsa necessitatibus. Minima eum amet laboriosam in consequatur? Assumenda autem beatae ratione tempore, voluptatum odio reprehenderit itaque eligendi perspiciatis facilis fugiat sequi hic, tenetur error quibusdam similique quaerat suscipit expedita a tempora nulla provident? Eaque optio veritatis consequatur quos beatae neque laudantium? Voluptatem molestias doloremque ducimus accusantium vero doloribus explicabo, error eaque nisi beatae impedit ex laborum possimus perspiciatis fuga numquam incidunt? Soluta aspernatur odio blanditiis nisi quaerat. At, ut voluptatem? Ad consectetur reprehenderit sed ipsum blanditiis? Et similique deleniti eius fugiat maiores! Tenetur, officiis. Asperiores enim hic ducimus voluptatem nesciunt iure dolores voluptatum quae magnam provident quia rerum quaerat facilis maxime dolore quam, consequuntur blanditiis harum. Voluptatum sit illo dolore autem facere, aliquam commodi eius. Atque in quae fuga, quidem aliquam eligendi tenetur, consequatur dolore, porro distinctio sequi est. Dolorum rem quisquam deleniti recusandae quaerat animi consectetur illum, nemo facilis qui impedit, quasi asperiores ratione voluptatem aliquam a, voluptas ullam! Velit minima laudantium animi dolorem labore delectus facilis corporis assumenda molestias, asperiores tempora rem quas explicabo nisi exercitationem quam repudiandae. Reprehenderit, quae dolore libero numquam quod reiciendis at dolor, recusandae quis consequuntur harum minus provident sit, vel cumque animi? Accusantium ducimus veniam sequi quaerat doloribus odio necessitatibus ipsa non. Maiores totam earum dolor aliquam architecto at obcaecati! Eos minima iste nam molestiae explicabo perspiciatis aperiam sit maxime possimus facilis id ratione dolores earum sunt tenetur atque deleniti aliquid, reiciendis odio. Impedit fuga eligendi quasi laudantium aliquam facilis amet magni doloremque blanditiis animi modi corrupti voluptatibus ipsum, veritatis minima, vel sequi obcaecati quos sunt ratione vero mollitia illo laboriosam. Sunt corrupti esse nulla obcaecati atque reprehenderit modi magnam veniam, neque alias labore dolorem delectus incidunt eaque ad quis, praesentium culpa nam repellendus ex nemo. Ad numquam eligendi quaerat sed enim ipsa dignissimos alias consectetur beatae. Optio ab repudiandae excepturi dolores placeat. Temporibus repellendus nam minus magnam animi quidem velit asperiores, mollitia ipsum nesciunt ut illo repudiandae rerum officiis reprehenderit? Nemo, quidem corporis voluptates accusantium sequi voluptas eaque quisquam necessitatibus, repellendus laboriosam assumenda! Autem tempore impedit debitis eius vero eligendi, obcaecati harum quasi qui ex quos dignissimos numquam. Ducimus labore error, nulla, iure quibusdam mollitia excepturi temporibus ea molestias corporis, quo vero magni earum! Commodi, numquam quia dolorum eaque laborum hic recusandae. Delectus facere error sed aliquam cumque nostrum hic.",
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
