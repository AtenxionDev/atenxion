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
      justifyContent={{ xs: "center", lg: "space-around" }}
      alignItems={"center"}
    >
      <Box
        width={{ xs: "80%", lg: "25%" }}
        textAlign={{ xs: "center", lg: "left" }}
        mb={{ xs: 2, lg: 0 }}
      >
        <Heading color="custom.black">
          Empowering in every aspects for your needs
        </Heading>
      </Box>

      <Box
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="center"
        gap={{ xs: 2, lg: 6 }}
      >
        {/* <Box
          position={"relative"}
          width={{ xs: "fit-content", lg: "340px" }}
          display={"flex"}
          flexDirection={{ xs: "row", lg: "column" }}
        >
          <Image
            src="/assets/features/leadgenFrame.svg"
            alt="frame"
            width={340}
            height={198}
          />

          <Box position={"absolute"} top={"74px"} left={"-28px"}>
            <Image
              src="/assets/features/leadgen.svg"
              alt="frame"
              width={174}
              height={138}
            />
          </Box>

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
              Lead Generation
            </BodyText>
            <BodyText variant="medium" weight="regular">
              Enhance customer interactions by collecting leads and gathering
              data while delivering a personalized experience
            </BodyText>
          </Box>
        </Box> */}

        <AspectComponent
          img1="/assets/features/leadgenFrame.svg"
          img2="/assets/features/leadgen.svg"
          title="Lead Generation"
          description="Enhance customer interactions by collecting leads and gathering
              data while delivering a personalized experience"
        />

        <AspectComponent
          img1="/assets/features/sqlFrame.svg"
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
