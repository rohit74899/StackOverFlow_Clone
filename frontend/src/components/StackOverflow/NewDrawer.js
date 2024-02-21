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


// new Components Added
import axios from "axios";
import { Container } from '@mui/material';
import Nsidebar from "./Nsidebar"
import Grid from '@mui/material/Grid';
import {  useEffect, useState } from "react";
import Sidebar from './Sidebar';
import Main from './Main';
import { blue } from '@material-ui/core/colors';


// New Component Test
import Tags from './Pages/Tags'
import Home from './Pages/Home';
import Questions from './Pages/Questions'
import Community from './Pages/Community';
import Users from './Pages/Users'
const drawerWidth = 210;

export default function ClippedDrawer({questions}) {

  const [page,setpage]=useState('Home');

  const options=['Home','Community','Questions','Tags','Users'];

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
                  <Main questions={questions} />
                ) : page === 'Community' ? (
                  <Community />
                ) : page === 'Tags' ? (
                  <Tags />
                ) : page === 'Questions' ? (
                  <Main questions={questions} />
                ) : page === 'Users' ? (
                  <Users />
                ) : null}
                
                
                
                
        </Grid>
    
    </Grid>


    
    
  );
}