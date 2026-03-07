import { Typography, Grid, Box } from "@mui/material";

interface ImageNContentProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageRight?: boolean;
}

// We pass props to make it dynamic
export function ImageNContent({
  title,
  subtitle,
  description,
  imageSrc,
  imageRight = true, // Default value assigned here
}: ImageNContentProps) {
  return (
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
      <Grid item size={6}>
        <Typography
          variant="overline"
          color="secondary"
          sx={{ display: "block", mb: 1 }}
        >
          {subtitle}
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </Grid>

      {/* Image Column */}
      <Grid item size={6} sx={{ display: "flex", justifyContent: "center" }}>
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
      </Grid>
    </Grid>
  );
}
