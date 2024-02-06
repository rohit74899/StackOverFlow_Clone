import React from "react";
import "./css/index.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
// import Avatar from "@mui/material/Avatar";
import InboxIcon from "@material-ui/icons/Inbox";
import HelpIcon from "@material-ui/icons/Help";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../feature/userSlice";

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {blue} from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: {
      main: blue[400],
    },
  },
});
const HeaderContainer = styled('div')({
  backgroundColor: theme.palette.primary.main,
  // Add other styling properties as needed
});

function Header() {
  const user = useSelector(selectUser);
  // console.log(user);

 
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: name ? stringToColor(name) : "rgba(255,255,255,0.8)",
      },
      // children: name && `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (

    <ThemeProvider theme={theme}>
    <header>

     
      <HeaderContainer className="header-container">
        <div className="header-left" >
          {/* ICON FIELD */}
          
              <Stack spacing={-1} style={{ fontSize: '20px'}}>
                    <FilterHdrIcon color='#d81b60' style={{fontSize:'inherit' , fontSize: '50px'}}/>

                    <Paper elevation={0} style={{backgroundColor:blue[300]}}> <h3>Coder's Battle Room</h3></Paper>
              </Stack>
        </div>
       
        <div className="header-right">
          <div className="header-right-container">
            {window.innerWidth < 768 && <SearchIcon />}
            <Stack direction={"row"} spacing={2}>
                <Avatar
                  style={{
                    cursor: "pointer",
                  }}
                  {...stringAvatar(user && user.displayName)}
                  onClick={() => auth.signOut()}
                />
                {user === null ? (
                  <>
                  <Button variant="contained" style={{backgroundColor:'#039be5',color:"white"}}>Login</Button>
                  <Button variant="contained" style={{backgroundColor:'#039be5',color:"white"}}>Signup</Button>
                  </>
                  
                ) : (
                  <Button variant="contained"  style={{backgroundColor:'#039be5',color:"white"}}{...stringAvatar(user && user.displayName)}
                  onClick={() => auth.signOut()}>Logout </Button>
                )}
                
            </Stack>
            
           
          </div>
        </div>
      </HeaderContainer>
    </header>
    </ThemeProvider>
  );
}

export default Header;
