import { useState } from "react";
import { Box, Fade, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface ImageSlideshowProps {
  images: string[];
  alt: string;
}

export function ImageSlideshow({ images, alt }: ImageSlideshowProps) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev: number) => (prev + 1) % images.length);
  };

  const handleBack = () => {
    setIndex((prev: number) => (prev - 1 + images.length) % images.length);
  };

  // If there's only one image, just show it without buttons
  if (images.length <= 1) {
    return (
      <Box
        component="img"
        src={images[0]}
        alt={alt}
        sx={{
          width: "100%",
          maxWidth: "500px",
          aspectRatio: "1/1",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "500px",
        aspectRatio: "1/1",
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
        // This ensures buttons are only visible when hovering over the image
        "&:hover .nav-button": { opacity: 1 },
      }}
    >
      {images.map((src, i) => (
        <Fade key={src} in={index === i} timeout={500}>
          <Box
            component="img"
            src={src}
            alt={`${alt} - slide ${i}`}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: index === i ? "block" : "none",
            }}
          />
        </Fade>
      ))}

      {/* Navigation Buttons */}
      <IconButton
        className="nav-button"
        onClick={handleBack}
        sx={{
          position: "absolute",
          left: 10,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "rgba(255, 255, 255, 0.4)",
          color: "white",
          opacity: 0, // Hidden by default
          transition: "opacity 0.3s",
          "&:hover": { bgcolor: "rgba(255, 255, 255, 0.6)" },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        className="nav-button"
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "rgba(255, 255, 255, 0.4)",
          color: "white",
          opacity: 0, // Hidden by default
          transition: "opacity 0.3s",
          "&:hover": { bgcolor: "rgba(255, 255, 255, 0.6)" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Optional: Slide Counter (e.g., "1 / 3") */}
      {/* <Box
        sx={{
          position: "absolute",
          bottom: 10,
          right: 10,
          bgcolor: "rgba(0,0,0,0.5)",
          color: "white",
          px: 1,
          borderRadius: "4px",
          fontSize: "0.75rem",
        }}
      >
        {index + 1} / {images.length}
      </Box>*/}
    </Box>
  );
}
