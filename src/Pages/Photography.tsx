import { ImageSlideshow } from "../Components/ImageSlideshow";
import { NavBar } from "../Components/NavBar";
import { Typography, Paper, Box, Grid } from "@mui/material";

// Asset Imports
const sfSights2025 = import.meta.glob<{ default: string }>(
  "../assets/SF_Sights_2025/*.{png,jpg,jpeg,JPEG}",
  { eager: true },
);
// Convert that object into a simple array of image paths
const sfImagePaths2025 = Object.values(sfSights2025).map((mod) => mod.default);

const sfSights2024 = import.meta.glob<{ default: string }>(
  "../assets/SF_Sights_2024/*.{png,jpg,jpeg,JPEG}",
  { eager: true },
);
// Convert that object into a simple array of image paths
const sfImagePaths2024 = Object.values(sfSights2024).map((mod) => mod.default);

const ogSFSights = import.meta.glob<{ default: string }>(
  "../assets/OG_SF_Sights/*.{png,jpg,jpeg,JPEG}",
  { eager: true },
);
// Convert that object into a simple array of image paths
const ogSFSightsPaths = Object.values(ogSFSights).map((mod) => mod.default);

const NY_Nights_1 = import.meta.glob<{ default: string }>(
  "../assets/NY_Nights_1/*.{png,jpg,jpeg,JPEG}",
  { eager: true },
);
// Convert that object into a simple array of image paths
const NY_Nights_1Paths = Object.values(NY_Nights_1).map((mod) => mod.default);

const NY_Nights_2 = import.meta.glob<{ default: string }>(
  "../assets/NY_Nights_2/*.{png,jpg,jpeg,JPEG}",
  { eager: true },
);
// Convert that object into a simple array of image paths
const NY_Nights_2Paths = Object.values(NY_Nights_2).map((mod) => mod.default);

const NY_Nights_3 = import.meta.glob<{ default: string }>(
  "../assets/NY_Nights_3/*.{png,jpg,jpeg,JPEG}",
  { eager: true },
);
// Convert that object into a simple array of image paths
const NY_Nights_3Paths = Object.values(NY_Nights_3).map((mod) => mod.default);

export function Photography() {
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
        <NavBar showBack={true} />
        <Box sx={{ pt: "90px" }}>
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
            <Box sx={{ p: 4 }}>
              <Typography
                variant="h2"
                gutterBottom
                color="white"
                align="center"
                sx={{ fontWeight: "bold", mb: 4 }}
              >
                Photography
              </Typography>
              <hr></hr>

              {/*Contact me setion */}
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                alignContent={"center"}
              >
                <Grid size={6}>
                  <Paper sx={{ bgcolor: "#6B7445", borderRadius: 45 }}>
                    <Typography
                      align="center"
                      color="white"
                      component="a"
                      href="mailto:ejlewis919@gmail.com"
                      justifyContent={"center"}
                      alignContent={"center"}
                      alignItems={"center"}
                      fontWeight={"Bold"}
                      sx={{
                        textDecoration: "none",
                        display: "block",
                        typography: "xs: h8, md: h3",
                      }}
                    >
                      Contact ejlewis919@gmail.com for photo prints
                    </Typography>
                  </Paper>
                </Grid>
                <Grid size={6}>
                  <Paper sx={{ bgcolor: "#6B7445", borderRadius: 45 }}>
                    <Typography
                      align="center"
                      color="white"
                      component="a"
                      href="https://www.instagram.com/3yes.of.3lij4h"
                      justifyContent={"center"}
                      alignContent={"center"}
                      alignItems={"center"}
                      fontWeight={"Bold"}
                      sx={{
                        textDecoration: "none",
                        display: "block",
                        typography: "xs: h8, md: h3",
                      }}
                    >
                      Visit @3yes.of.3lij4h on Instagram for more photos
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>

              <hr></hr>
              <Grid container size={12} justifyContent={"Center"}>
                <Typography
                  sx={{ fontWeight: "Bold", color: "White", fontSize: 40 }}
                >
                  San Francisco Summer 25'
                </Typography>
              </Grid>
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                alignContent={"center"}
              >
                <ImageSlideshow
                  images={sfImagePaths2025}
                  alt={"PhotoSlideshow alt text"}
                ></ImageSlideshow>
              </Grid>

              <hr></hr>
              <Grid container size={12} justifyContent={"Center"}>
                <Typography
                  sx={{ fontWeight: "Bold", color: "White", fontSize: 40 }}
                >
                  New York Christmas 23'
                </Typography>
              </Grid>
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                alignContent={"center"}
              >
                <ImageSlideshow
                  images={NY_Nights_1Paths}
                  alt={"PhotoSlideshow alt text"}
                ></ImageSlideshow>
              </Grid>

              <hr></hr>
              <Grid container size={12} justifyContent={"Center"}>
                <Typography
                  sx={{ fontWeight: "Bold", color: "White", fontSize: 40 }}
                >
                  San Francisco Summer 24'
                </Typography>
              </Grid>
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                alignContent={"center"}
              >
                <ImageSlideshow
                  images={sfImagePaths2024}
                  alt={"PhotoSlideshow alt text"}
                ></ImageSlideshow>
              </Grid>

              <hr></hr>
              <Grid container size={12} justifyContent={"Center"}>
                <Typography
                  sx={{ fontWeight: "Bold", color: "White", fontSize: 40 }}
                >
                  A Day in the Bay
                </Typography>
              </Grid>
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                alignContent={"center"}
              >
                <ImageSlideshow
                  images={ogSFSightsPaths}
                  alt={"PhotoSlideshow alt text"}
                ></ImageSlideshow>
              </Grid>

              <hr></hr>
              <Grid container size={12} justifyContent={"Center"}>
                <Typography
                  sx={{ fontWeight: "Bold", color: "White", fontSize: 40 }}
                >
                  Posh Night in New York
                </Typography>
              </Grid>
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                alignContent={"center"}
              >
                <ImageSlideshow
                  images={NY_Nights_2Paths}
                  alt={"PhotoSlideshow alt text"}
                ></ImageSlideshow>
              </Grid>

              <hr></hr>
              <Grid container size={12} justifyContent={"Center"}>
                <Typography
                  sx={{ fontWeight: "Bold", color: "White", fontSize: 40 }}
                >
                  New York: A Tourist's Experience
                </Typography>
              </Grid>
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                alignContent={"center"}
              >
                <ImageSlideshow
                  images={NY_Nights_3Paths}
                  alt={"PhotoSlideshow alt text"}
                ></ImageSlideshow>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Paper>
    </>
  );
}
