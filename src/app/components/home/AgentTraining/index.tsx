"use client";
import { Box } from "@mui/material";
import React from "react";
import SubHeading from "../../typeface/SubHeading";
import AgentTrainingAccordion from "../../AgentTrainingAccordion";
import Layout from "../../common/Layout";
import Image from "next/image";

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
      "Seamlessly upload your files, such as PDFs, Word documents, add a Website or sync data from platforms like Google Drive and Notion. ",
    image: "/assets/agent/step2.svg",
  },
  {
    id: "panel2",
    title: "3:  Define Actions & Conversation Starters",
    description:
      "Seamlessly upload your files, such as PDFs, Word documents, add a Website or sync data from platforms like Google Drive and Notion. ",
    image: "/assets/agent/step3.svg",
  },
  {
    id: "panel3",
    title: "4:  Embed or Integrate with Your Applications",
    description:
      "Seamlessly upload your files, such as PDFs, Word documents, add a Website or sync data from platforms like Google Drive and Notion. ",
    image: "/assets/agent/step4.svg",
  },
  {
    id: "panel4",
    title: "5:  Monitor Conversations & Gain Insights",
    description:
      "Seamlessly upload your files, such as PDFs, Word documents, add a Website or sync data from platforms like Google Drive and Notion. ",
    image: "/assets/agent/step5.svg",
  },
];

const AgentTraining = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel0");
  const [image, setImage] = React.useState("/assets/agent/step1.svg");
  const handleChange =
    (panel: PanelData) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      console.log(panel);
      setExpanded(isExpanded ? panel.id : false);
      setImage(panel.image);
    };
  console.log(image);
  return (
    <Layout bgColor="custom.cream">
      <Box
        sx={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        id="howItWorks"
      >
        <SubHeading width={{ xs: "auto" }} textAlign="center">
          Learn how Atenxion quickly <br /> understands and trains your agent
        </SubHeading>
        <Box
          sx={{
            mt: { xs: "30px", md: "60px" },
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: "60px", md: "40px", lg: "60px" },
            px: 4,
          }}
        >
          {/* <Box
            width={{ xs: "100%", md: "50%" }}
            height={{ xs: "300px", md: "500px" }}
            mb={{ xs: 12, sm: 18, md: 0 }}
            alignItems={{ xs: "center" }}
          > */}
          <Image
            src={image}
            alt="steps"
            width={400}
            height={450}
            layout="responsive"
            style={{ maxWidth: "500px" }}
          />
          {/* </Box> */}
          <Box width={{ xs: "100%", md: "70%", lg: "40%" }}>
            <AgentTrainingAccordion
              data={data}
              handleChange={handleChange}
              expanded={expanded}
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default AgentTraining;
