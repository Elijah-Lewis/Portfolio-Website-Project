import {
  Typography,
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Paper,
  Grid,
  Button
} from "@mui/material";
import pfpImage from "../assets/pfp(2).jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Home(){
    //jsx components
  //let pages = ["Home", "Projects", "Passions"]

  const[count, setCount] = useState(1);

  const handleButtonClick = () => {
    alert("A button was clicked!");
    setCount(count + 1);
    console.log("The button has been clicked " + count + " times!");
  } 

  const handleTextClick =() => {
    alert("A typography element was clicked!");
    setCount(count + 1);
    console.log("The text element has been clicked " + count + " times!");
  }

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ bgcolor: "#3D2B1F" }} //very top bar containing my page selector button, and my Name
      >
        <Toolbar>
          <Typography
            variant="h3"
            component="a"
            href="https://www.linkedin.com/in/ejlewis24" // Fixed typo: 'linked' to 'linkedin'
            target="_blank"
            rel="noopener noreferrer"
            sx={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                width: "fit-content", // Changed from 100% to fit-content
                textAlign: "center",
                textDecoration: "none", // Keeps the name from being underlined
                color: "inherit",       // Keeps your white/default color
                pointerEvents: "auto",  // ENSURE this is set to auto so it's clickable!
                zIndex: 1,              // Makes sure it sits on top of the Toolbar
            }}
            >
            Elijah Lewis
            </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* Spacer */}

      {/* 3 buttons for page redirection*/}
      <Grid container spacing={4} marginBottom={1} sx={{ justifyContent: "center", alignItems: "center" }}>
      <Grid size={4}>
        <Button 
        variant="contained" 
        component={Link} 
        to="/Projects" 
        sx={{ bgcolor: "tan", width: '100%', color: "white" }}
        >
        <b>Projects</b>
        </Button>
      </Grid>

      <Grid size={4}>
        <Button 
        variant="contained" 
        component={Link} 
        to="/Passions" 
        sx={{ bgcolor: "tan", width: '100%', color: "white" }}
        >
        <b>Passions</b>
        </Button>
      </Grid>

    <Grid size={4}>
        <Button 
        variant="contained" 
        component={Link} 
        to="/Photography" 
        sx={{ bgcolor: "tan", width: '100%', color: "white" }}
        >
        <b>Photography</b>
        </Button>
    </Grid>
    </Grid>

      {/* 3 buttons for page redirection*/}
      <Paper
        elevation={3}
        sx={{
          bgcolor: "#9F8170",
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid container>
          <Grid size={6}>
            <Typography
              variant="h5"
              color="#F5F5DC"
              onClick={handleTextClick}
              sx={{
                textAlign: "center",
              }}
            >
              <b>Education</b>
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography
              color="#F5F5DC"
              sx={{
                textAlign: "center",
              }}
            >
              <b>"Light the path for a brighter future"</b>
            </Typography>
          </Grid>
          <Grid size={12} sx={{ display: "flex", justifyContent: "center" }}>
            {/*Profile Picture in sandwhiched by all of the content*/}
            <Box sx={{ my: 2 }}>
              <Avatar src={pfpImage} sx={{ width: {xs: 100, sm: 200}, height: {xs: 100, sm: 200} }} />
            </Box>
          </Grid>
          <Grid size={6}>
            <Typography
              color="#F5F5DC"
              sx={{
                textAlign: "center",
              }}
            >
              <b>"Speak life with your two lips, and bloom"</b>
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography
              variant="h5"
              color="#F5F5DC"
              borderColor={"black"}
              onClick={handleTextClick}
              sx={{
                textAlign: "center",
              }}
            >
              <b>Current Passion Project</b>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Link to="/">Home</Link>
      <Link to="/Projects">Projects</Link>
      <Link to="/Passions">Passions</Link>
      <Link to="/Photography">Photography</Link>
    </>
  );
}