"use client";
import { Box } from "@mui/material";
import React from "react";
import SubHeading from "../../typeface/SubHeading";
import AgentTrainingAccordion from "../../AgentTrainingAccordion";
import Layout from "../../common/Layout";
import Image from "next/image";
import Heading from "../../typeface/Heading";

export interface PanelData {
  id: string;
  title: string;
  description: string;
  image: string;
}

const data = [
  {
    id: "panel0",
    title: "1:  Import your data",
    description:
      "Seamlessly upload your files, such as PDFs, Word documents, add a Website or sync data from platforms like Google Drive and Notion. ",
    image: "/assets/agent/step1.svg",
  },
  {
    id: "panel1",
    title: "2:  Customize Behavior & Appearance",
    description:
      "Tailor your AI agent to align with your brand by adding logos, selecting color schemes, and setting the conversational tone with custom instructions, ensuring it reflects your brand’s personality. ",
    image: "/assets/agent/step2.svg",
  },
  {
    id: "panel2",
    title: "3:  Define Actions & Conversation Starters",
    description:
      "Empower your AI agent with custom actions for dynamic, personalized responses. Set up conversational starters to help users easily engage and get the information they need quickly. ",
    image: "/assets/agent/step3.svg",
  },
  {
    id: "panel3",
    title: "4:  Embed or Integrate with Your Applications",
    description:
      "Effortlessly embed a custom chat widget into your website or integrate the AI agent with your existing applications via our APIs. Deliver seamless, AI-powered support across all customer touchpoints. ",
    image: "/assets/agent/step4.svg",
  },
  {
    id: "panel4",
    title: "5:  Monitor Conversations & Gain Insights",
    description:
      "Track and analyze your AI agent's interactions with real-time insights and performance data. Continuously refine your strategies, optimize outcomes, and enhance customer satisfaction.",
    image: "/assets/agent/step5.svg",
  },
];

const AgentTraining = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel0");
  const [image, setImage] = React.useState("/assets/agent/step1.svg");
  const handleChange =
    (panel: PanelData) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel.id : false);
      setImage(panel.image);
    };
  return (
    <Layout bgColor="custom.cream">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Box
          id="howItWorks"
          sx={{
            height: "200px",
            position: "absolute",
            bgcolor: "red",
            top: 0,
            marginTop: "-80px",
            opacity: 0,
          }}
        >
          hello
        </Box>
        <Box
          width="100%"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            py: { xs: "20px", md: "50px" },
            px: 0,
          }}
          maxWidth={{ xs: "100%", lg: "1200px", xl: "1400px" }}
        >
          <Box
            width={{ xs: "auto" }}
            textAlign="center"
            maxWidth="1200px"
            px={2}
          >
            <Heading color="custom.black">
              No-code AI platform that empowers you to create, customize, and
              deploy AI agents in Minutes
            </Heading>
          </Box>
          <Box
            sx={{
              mt: { xs: "30px", md: "60px" },
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { xs: "center", md: "space-between" },

              alignItems: { md: "flex-start", sm: "center" },
              gap: { xs: "20px", md: "40px", lg: "30px" },
              px: { xs: 4, sm: 0, md: 0 },
            }}
          >
            <Box
              width={{ xl: "650px", lg: "550px", md: "400px", xs: "auto" }}
              pl={{ xs: 0, xl: 6 }}
            >
              <Image
                src={image}
                alt="steps"
                width={500}
                height={600}
                layout="responsive"
                style={{ maxWidth: "600px" }}
              />
            </Box>
            <Box
              width={{ xs: "100%", md: "50%", lg: "50%" }}
              mt={{ xl: "70px", lg: "65px" }}
            >
              <AgentTrainingAccordion
                data={data}
                handleChange={handleChange}
                expanded={expanded}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default AgentTraining;
