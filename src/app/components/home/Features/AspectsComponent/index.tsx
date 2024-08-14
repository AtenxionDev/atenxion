import BodyText from "@/app/components/typeface/BodyText";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

interface AspectComponentProps {
  img1: string;
  img2?: string;
  title: string;
  description: string;
}

function AspectComponent({
  img1,
  img2,
  title,
  description,
}: AspectComponentProps) {
  return (
    <Box
      position={"relative"}
      width={{ xs: "fit-content", md: "720px", lg: "340px" }}
      display={"flex"}
      flexDirection={{ xs: "row", lg: "column" }}
    >
      <Image src={img1} alt="frame" width={340} height={198} />

      {img2 && (
        <Box position={"absolute"} top={"74px"} left={"-28px"}>
          <Image src={img2} alt="frame" width={174} height={138} />
        </Box>
      )}

      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={1}
        bgcolor={"custom.cream"}
        mt={{ xs: "6px", lg: -1 }}
        ml={{ xs: -2, lg: 0 }}
        height={{ xs: "198px", lg: "200px" }}
        pt={4}
        px={3}
        borderRadius={{ xs: "0px 16px 16px 0px", lg: "0px 0px 16px 16px" }}
      >
        <BodyText variant="large" weight="semibold">
          {title}
        </BodyText>
        <BodyText variant="medium" weight="regular">
          {description}
        </BodyText>
      </Box>
    </Box>
  );
}

export default AspectComponent;
