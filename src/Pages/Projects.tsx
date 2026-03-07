import pfpImage from "../assets/pfp(2).jpg";
import { ImageNContent } from "../Components/ImageNContent";
import { NavBar } from "../Components/NavBar";
import { Typography } from "@mui/material";

export function Projects() {
  return (
    <>
      <NavBar />
      <Typography>This is the projects page</Typography>

      {/* Section 1: Image on Right */}
      <ImageNContent
        title="Project Alpha"
        subtitle="Web Design"
        description="Detailed description here..."
        imageSrc={pfpImage}
        imageRight={true}
      />

      {/* Section 2: Image on Left */}
      <ImageNContent
        title="Project Beta"
        subtitle="Mobile App"
        description="Another description here..."
        imageSrc={pfpImage}
        imageRight={false}
      />
    </>
  );
}
