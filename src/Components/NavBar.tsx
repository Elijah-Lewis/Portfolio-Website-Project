import { AppBar, Typography, Toolbar, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export function NavBar() {
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
              color: "inherit", // Keeps your white/default color
              pointerEvents: "auto", // ENSURE this is set to auto so it's clickable!
              zIndex: 1, // Makes sure it sits on top of the Toolbar
            }}
          >
            Elijah Lewis
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* Spacer */}
      {/* 3 buttons for page redirection*/}
      <Grid
        container
        spacing={4}
        marginBottom={1}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Grid size={4}>
          <Button
            variant="contained"
            component={Link}
            to="/Projects"
            sx={{ bgcolor: "tan", width: "100%", color: "white" }}
          >
            <b>Projects</b>
          </Button>
        </Grid>

        <Grid size={4}>
          <Button
            variant="contained"
            component={Link}
            to="/Passions"
            sx={{ bgcolor: "tan", width: "100%", color: "white" }}
          >
            <b>Passions</b>
          </Button>
        </Grid>

        <Grid size={4}>
          <Button
            variant="contained"
            component={Link}
            to="/Photography"
            sx={{ bgcolor: "tan", width: "100%", color: "white" }}
          >
            <b>Photography</b>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
