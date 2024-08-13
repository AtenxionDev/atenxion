import { Typography } from "@mui/material";
import React, { ReactNode } from "react";

const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <Typography
      sx={{
        fontWeight: 700,
        fontSize: {
          md: "32px",
          lg: "48px",
          sm: "30px",
          xs: "27px",
        },
        lineHeight: "115%",
        color: "#F2EFEA",
      }}
    >
      {children}
    </Typography>
  );
};

export default Heading;
