import { Typography, TypographyProps } from "@mui/material";
import React, { ReactNode } from "react";

interface SubHeadingProps extends TypographyProps {
  children: ReactNode;
  color?: string;
  props?: React.ComponentProps<typeof Typography>;
}

const SubHeading = ({ children, color, ...props }: SubHeadingProps) => {
  return (
    <Typography
      {...props}
      sx={{
        fontWeight: 600,
        fontSize: { md: "24px", xl: "28px" },
        lineHeight: "125%",
        color: color ? color : "custom.black",
      }}
    >
      {children}
    </Typography>
  );
};

export default SubHeading;
