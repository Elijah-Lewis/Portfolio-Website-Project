import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
// Add 'showBack' prop (defaults to false)
export function NavBar({ showBack = false }: { showBack?: boolean }) {
  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "#839705" }}>
        <Toolbar>
          {/* Optional Back Button */}
          {showBack && (
            <Button
              component={Link}
              to="/"
              startIcon={<HomeIcon />}
              sx={{
                position: "absolute",
                left: 16, // Padding from the left edge
                color: "white",
                textTransform: "none",
                fontWeight: "bold",
                fontSize: 20,
                borderRadius: 0,
              }}
            >
              Home
            </Button>
          )}

          <Typography
            component="a"
            href="https://www.linkedin.com/in/ejlewis24"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              width: "fit-content",
              textAlign: "center",
              textDecoration: "none",
              color: "inherit",
              pointerEvents: "auto",
              zIndex: 1,
              fontWeight: "Bold",
              typography: { xs: "h4", md: "h2" },
            }}
          >
            Elijah Lewis
          </Typography>
        </Toolbar>
        <Paper
          elevation={3}
          sx={{
            bgcolor: "#BBCB2E",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {" "}
          <Grid
            container
            spacing={4}
            marginBottom={1}
            sx={{ justifyContent: "center", alignItems: "center", mt: 1 }}
          >
            <Grid size={4}>
              <Button
                variant="contained"
                component={Link}
                to="/Projects"
                sx={{ bgcolor: "#6B7445", width: "100%", color: "white" }}
              >
                <b>Projects</b>
              </Button>
            </Grid>

            <Grid size={4}>
              <Button
                variant="contained"
                component={Link}
                to="/Passions"
                sx={{ bgcolor: "#6B7445", width: "100%", color: "white" }}
              >
                <b>Passions</b>
              </Button>
            </Grid>

            <Grid size={4}>
              <Button
                variant="contained"
                component={Link}
                to="/Photography"
                sx={{ bgcolor: "#6B7445", width: "100%", color: "white" }}
              >
                <b>Photography</b>
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </AppBar>
    </>
  );
}
