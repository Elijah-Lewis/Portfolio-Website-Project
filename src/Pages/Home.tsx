import { Typography, Avatar, Box, Paper, Grid, Button } from "@mui/material";
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
      <Paper
        elevation={3}
        sx={{
          bgcolor: "#BBCB2E",
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NavBar />
        <Box sx={{ pt: "110px" }}>
          <Paper
            elevation={3}
            sx={{
              bgcolor: "#839705",
              minHeight: "100vh",
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              alignContent={"center"}
            >
              <Grid size={4}>
                <Typography
                  color="#F5F5DC"
                  align="center"
                  variant="h6"
                  onClick={handleTextClick}
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <b>
                    "Speak life unto others with your two lips, and you all
                    shall bloom"
                  </b>
                </Typography>
              </Grid>
              <Grid size={4} sx={{ display: "flex", justifyContent: "center" }}>
                {/*Profile Picture in sandwhiched by all of the content*/}
                <Box sx={{ my: 2 }}>
                  <Avatar
                    src={pfpImage}
                    component="a"
                    href="https://www.linkedin.com/in/ejlewis24" // Fixed typo: 'linked' to 'linkedin'
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      width: { xs: 100, sm: 300 },
                      height: { xs: 100, sm: 300 },
                    }}
                  />
                </Box>
              </Grid>
              <Grid size={4}>
                <Typography
                  color="#F5F5DC"
                  align="center"
                  variant="h6"
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <b>"Light the path for a brighter future"</b>
                </Typography>
              </Grid>

              {/*Link to my resume*/}
              <Grid size={4}>
                <Button
                  variant="contained"
                  component={"a"}
                  href="https://docs.google.com/document/d/1tPfNRRifTF92zWPHz9nAi9_Rdb1Epecg/edit?usp=sharing&ouid=115975616493435017262&rtpof=true&sd=true"
                  sx={{ bgcolor: "#6B7445", width: "100%", color: "white" }}
                >
                  <b>Resume</b>
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Paper>
    </>
  );
}
