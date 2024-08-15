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
      setExpanded(isExpanded ? panel.id : false);
      setImage(panel.image);
    };
  return (
    <Layout bgColor="custom.cream">
      <Box display="flex" alignItems="center" justifyContent="center">
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
          id="howItWorks"
          maxWidth={{ xs: "100%", lg: "1200px", xl: "1400px" }}
        >
          <Box width={{ xs: "auto" }} textAlign="center">
            <Heading color="custom.black">
              Learn how Atenxion quickly <br /> understands and trains your
              agent
            </Heading>
          </Box>
          <Box
            sx={{
              mt: { xs: "30px", md: "60px" },
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { xs: "center", md: "space-between" },
              alignItems: "center",
              gap: { xs: "20px", md: "40px", lg: "60px" },
              px: { xs: 4, sm: 0, md: 0 },
            }}
          >
            <Box
              minWidth={{ lg: "500px", md: "400px", xs: "auto" }}
              pl={{ xs: 0, xl: 6 }}
            >
              <Image
                src={image}
                alt="steps"
                width={400}
                height={450}
                layout="responsive"
                style={{ maxWidth: "500px" }}
              />
            </Box>
            <Box width={{ xs: "100%", md: "50%", lg: "50%" }}>
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
