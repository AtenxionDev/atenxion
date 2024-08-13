import { Typography } from "@mui/material";
import React, { ReactNode } from "react";

const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <Typography
      sx={{
        fontWeight: 600,
        fontSize: { sm: "32px", md: "32px", lg: "32px", xl: "36px" },
        lineHeight: "125%",
        color: "secondary.main",
      }}
    >
      {children}
    </Typography>
  );
};

export default Heading;
