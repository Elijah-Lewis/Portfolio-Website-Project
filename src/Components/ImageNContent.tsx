import { Typography, Grid, Box, Paper } from "@mui/material";
import { ImageSlideshow } from "./ImageSlideshow"; // Import your new component

interface ImageNContentProps {
  title: string;
  description: string;
  // Change imageSrc to allow both string (single) and string array (slideshow)
  imageSrc: string | string[];
  imageRight?: boolean;
}

export function ImageNContent({
  title,
  description,
  imageSrc,
  imageRight = true,
}: ImageNContentProps) {
  // Logic to determine if we are showing a slideshow
  const isSlideshow = Array.isArray(imageSrc);

  return (
    <Paper sx={{ bgcolor: "#964B00", borderRadius: 10 }}>
      <Grid
        container
        spacing={4}
        sx={{
          alignItems: "center",
          flexDirection: imageRight ? "row" : "row-reverse",
          my: 8,
          px: 4,
        }}
      >
        {/* Text Column */}
        <Grid size={6}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            fontWeight="bold"
            color="white"
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="white"
            sx={{ whiteSpace: "pre-line" }}
          >
            {description}
          </Typography>
        </Grid>

        {/* Image Column */}
        <Grid size={6} sx={{ display: "flex", justifyContent: "center" }}>
          {isSlideshow ? (
            /* Case 1: Array provided - Render Slideshow */
            <ImageSlideshow images={imageSrc} alt={title} />
          ) : (
            /* Case 2: Single string provided - Render standard Image */
            <Box
              component="img"
              src={imageSrc}
              alt={title}
              sx={{
                width: "100%",
                maxWidth: "500px",
                aspectRatio: "1/1",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
              }}
            />
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}
