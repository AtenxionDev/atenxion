import BodyText from "@/app/components/typeface/BodyText";
import Heading from "@/app/components/typeface/Heading";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import AspectComponent from "../AspectsComponent";

function EmpowerAspects() {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent={{ xs: "center", lg: "space-between" }}
      alignItems={"center"}
    >
      <Box
        width={{ xs: "100%", lg: "30%", xl: "40%" }}
        textAlign={{ xs: "center", lg: "left" }}
        mb={{ xs: 2, lg: 0 }}
      >
        <Heading color="custom.black">
          Custom AI, Zero Coding, Infinite Possibilities.
        </Heading>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        flexWrap={"wrap"}
        justifyContent="center"
        gap={{ xs: 2, lg: 6 }}
        id="features"
      >
        <AspectComponent
          img1="/assets/features/leadFrame.png"
          img2="/assets/features/lead.png"
          title="Lead Generation"
          description="Enhance customer interactions by collecting leads and gathering
              data while delivering a personalized experience"
        />

        <AspectComponent
          img1="/assets/features/sqlFrame.png"
          title="Chat with Your SQL"
          description="Connect your SQL database to the AI agent, allowing for natural
              language queries and instant results, including visualizations."
        />

        {/* <Box position={"relative"} width={"340px"}>
          <Image
            src="/assets/features/leadgenFrame.svg"
            alt="frame"
            width={340}
            height={198}
          />

          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={1}
            bgcolor={"custom.cream"}
            mt={-1}
            height={"200px"}
            pt={4}
            px={3}
            borderRadius={"0px 0px 16px 16px"}
          >
            <BodyText variant="large" weight="semibold">
              Chat with Your SQL
            </BodyText>
            <BodyText variant="medium" weight="regular">
              Connect your SQL database to the AI agent, allowing for natural
              language queries and instant results, including visualizations.
            </BodyText>
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
}

export default EmpowerAspects;
