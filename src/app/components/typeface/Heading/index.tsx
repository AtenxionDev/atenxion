import { Typography } from "@mui/material";
import React, { ReactNode } from "react";

const Heading = ({
  color,
  children,
}: {
  color?: string;
  children: ReactNode;
}) => {
  return (
    <Typography
      sx={{
        fontWeight: 600,
        fontSize: {
          xs: "18px",
          sm: "24px",
          md: "32px",
          lg: "32px",
          xl: "36px",
        },
        lineHeight: "125%",
        color: color || "#FFFFFF",
      }}
    >
      {children}
    </Typography>
  );
};

export default Heading;
