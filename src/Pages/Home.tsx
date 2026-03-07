import { Typography, Avatar, Box, Paper, Grid } from "@mui/material";
import pfpImage from "../assets/pfp(2).jpg";
import { useState } from "react";
import { NavBar } from "../Components/NavBar";

export function Home() {
  //jsx components
  //let pages = ["Home", "Projects", "Passions"]

  const [count, setCount] = useState(1);

  const handleTextClick = () => {
    alert("A typography element was clicked!");
    setCount(count + 1);
    console.log("The text element has been clicked " + count + " times!");
  };

  return (
    <>
      <NavBar />

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
              <Avatar
                src={pfpImage}
                component="a"
                href="https://www.linkedin.com/in/ejlewis24" // Fixed typo: 'linked' to 'linkedin'
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: { xs: 100, sm: 200 },
                  height: { xs: 100, sm: 200 },
                }}
              />
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
