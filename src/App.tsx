import {
  Typography,
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Paper,
  Grid,
  Button,
} from "@mui/material";
import pfpImage from "./assets/pfp(2).jpg";
import { useState } from "react";

function App(){
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
            component="div"
            sx={{
              position: "absolute", // Breaks out of the "side-by-side" flow
              left: "50%", // Moves the start of the text to the 50% mark
              transform: "translateX(-50%)", // Pulls the text back by half its own width
              width: "100%", // Ensures it has room to center
              textAlign: "center",
              pointerEvents: "none", // Allows clicks to "pass through" to buttons underneath
            }}
          >
            Elijah Lewis
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* Spacer */}

      
      {/* 3 buttons for page redirection*/}
      <Grid container
      spacing={4}
      marginBottom={1}
      sx={{
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Grid size={4}>
          <Button variant="contained" onClick={handleButtonClick} sx={{ bgcolor: "tan", width: '100%' }}><b>Projects</b></Button>
        </Grid>
        <Grid size={4}>
          <Button variant="contained" onClick={handleButtonClick} sx={{ bgcolor: "tan", width: '100%' }}><b>Passions</b></Button>
        </Grid>
        <Grid size={4}>
          <Button variant="contained" onClick={handleButtonClick} sx={{ bgcolor: "tan", width: '100%' }}><b>Current Obsessions</b></Button>
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
    </>
  );
}
export default App;
