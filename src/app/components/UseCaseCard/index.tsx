import { Box } from "@mui/material";
import React from "react";
import BodyText from "../typeface/BodyText";

interface UseCaseCardProps {
  title: string;
  description: string;
  width?: string;
  height?: string;
}

const UseCaseCard = ({
  title,
  description,
  width,
  height,
}: UseCaseCardProps) => {
  return (
    <Box
      bgcolor="custom.cream"
      width={{ xs: "100%", md: width }}
      minHeight={{ xs: "150px", md: height }}
      padding={4}
      borderRadius="16px"
    >
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
  );
};

export default UseCaseCard;
