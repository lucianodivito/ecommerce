import React from "react";
import Typography from "@mui/material/Typography";

export default function MainTitle() {
  return (
    <div>
      <Typography
        gutterBottom
        variant="h2"
        component="div"
        sx={{
          color: "white",
          textAlign: "center",
          fontFamily: "monospace",
          fontWeight: 600,
          fontSize: "40px",
        }}
      >
        Our products
      </Typography>
    </div>
  );
}
