import { Box } from "@mui/material";
import React from "react";
import BodyText from "../typeface/BodyText";

interface UseCaseCardProps {
  title: string;
  description: string;
  width?: string;
  height?: string;
  image?: React.ReactNode;
}

const UseCaseCard = ({
  title,
  description,
  width,
  height,
  image,
}: UseCaseCardProps) => {
  return (
    <Box
      bgcolor="custom.cream"
      width={{ xs: "100%", md: width }}
      minHeight={{ xs: "380px", md: height }}
      borderRadius="16px"
      display="flex"
      flexDirection="column"
    >
      <Box p={4}>
        <BodyText variant="large" weight="semibold">
          {title}
        </BodyText>
        <BodyText
          variant="medium"
          mt={2}
          width={{ xs: "100%", sm: "80%", md: "90%", lg: "80%" }}
        >
          {description}
        </BodyText>
      </Box>
      {image}
    </Box>
  );
};

export default UseCaseCard;
