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
      width={{ xs: "340px", md: "340px", lg: "340px" }}
      display={"flex"}
      flexDirection="column"
      // mx={{ xs: 1, md: 0 }}
    >
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <Image
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "contain",
          }}
          src={img1}
          alt="frame"
          width={340}
          height={198}
        />
      </Box>

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
        mt="-1"
        // ml={{ xs: -2, md: 0 }}
        height={{ xs: "198px", lg: "200px" }}
        pt={4}
        px={3}
        borderRadius="0px 0px 16px 16px"
        overflow={"hidden"}
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
