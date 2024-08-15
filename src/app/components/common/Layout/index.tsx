import { Box } from "@mui/material";
import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
  bgColor?: string;
  id?: string;
}

function Layout({ children, bgColor, id }: LayoutProps) {
  return (
    <Box
      py={6}
      px={{ sm: 4, md: 6 }}
      width={"100%"}
      bgcolor={bgColor ? bgColor : "#fff"}
      id={id}
    >
      {children}
    </Box>
  );
}

export default Layout;
