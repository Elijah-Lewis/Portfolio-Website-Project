import { ImageNContent } from "../Components/ImageNContent";
import { NavBar } from "../Components/NavBar";
import { Typography, Box, Paper } from "@mui/material";

// Asset Imports
import lightning from "../assets/Screenshot 2025-04-21 194232.png";
import ise from "../assets/Screenshot 2025-08-18 180652.png";

export function Passions() {
  // 1. Centralized Data: Simply add a new object here to create a new section
  const passions = [
    {
      title: "Music",
      description: `From record collecting to Live shows, I love engaging with artists and their sonical creations.`,
      image: lightning,
    },
    {
      title: "Art",
      description: `As I travel for internships and leisure, one thing that I ensure to do is to visit art museums.
        \nThe environments are often soothing and relaxing, encouraging visitors to enter an introspective state.`,
      image: [lightning, ise],
    },
    {
      title: "Nature",
      description: `Throughout the world, there are few things that many people collectively agree are calming and exciting.
                    One of these things is nature, and I relate to the masses in my enjoyment of nature.
                    From beaches to mountains, nature never ceases to fascinate and soothe me.`,
      image: lightning,
    },
    {
      title: "Books",
      description: `Whether it's a bedtime story or a fantasy getaway on a beach, books always come in clutch for quick enjoyment.
      Personally, historical fiction, and stories relating African American experiences are extremely exciting and intruiging.`,
      image: ise,
    },
  ];

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
              Passions
            </Typography>
            <hr></hr>

            {/* 2. Scalable Loop */}
            {passions.map((passion, index) => (
              <ImageNContent
                key={passion.title} // Use title as a unique key
                title={passion.title}
                description={passion.description}
                imageSrc={passion.image ?? ""}
                // 3. Alternating Logic:
                // Index 0 (Even) -> Right: true
                // Index 1 (Odd)  -> Right: false
                imageRight={index % 2 === 0}
              />
            ))}
          </Box>
        </Paper>
      </Paper>
    </>
  );
}
