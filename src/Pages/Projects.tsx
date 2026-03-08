import { ImageNContent } from "../Components/ImageNContent";
import { NavBar } from "../Components/NavBar";
import { Typography, Paper, Box } from "@mui/material";

// Asset Imports
import lightning from "../assets/Screenshot 2025-04-21 194232.png";
import ise from "../assets/Screenshot 2025-08-18 180652.png";

export function Projects() {
  // 1. Centralized Data: Simply add a new object here to create a new section
  const projects = [
    {
      title: "Project Alpha",
      subtitle: "Web Design",
      description: "Detailed description here...",
      image: lightning,
    },
    {
      title: "Project Beta",
      subtitle: "Mobile App",
      description: "Another description here...",
      image: ise,
    },
    // Future projects go here
  ];

  return (
    <>
      <Paper
        elevation={24}
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
          elevation={24}
          sx={{
            bgcolor: "#839705",
            minHeight: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom color="white">
              This is the projects page
            </Typography>

            {/* 2. Scalable Loop */}
            {projects.map((project, index) => (
              <ImageNContent
                key={project.title} // Use title as a unique key
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                imageSrc={project.image}
                // 3. Alternating Logic:
                // Index 0 (Even) -> Right: true
                // Index 1 (Odd)  -> Right: false
                imageRight={(1 + index) % 2 === 0}
              />
            ))}
          </Box>
        </Paper>
      </Paper>
    </>
  );
}
