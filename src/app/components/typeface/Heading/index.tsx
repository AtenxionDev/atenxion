import { Typography } from "@mui/material";
import React, { ReactNode } from "react";

const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <Typography
      sx={{
        fontWeight: 600,
        fontSize: { md: "32px", xl: "36px" },
        lineHeight: "125%",
      }}
    >
      {children}
    </Typography>
  );
};

export default Heading;
