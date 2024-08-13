"use client";
import { Box } from "@mui/material";
import React from "react";
import SubHeading from "../../typeface/SubHeading";
import AgentTrainingAccordion from "../../AgentTrainingAccordion";

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
    image: "gray",
  },
  {
    id: "panel1",
    title: "2:  Customize Behavior & Appearance",
    description:
      "Seamlessly upload your files, such as PDFs, Word documents, add a Website or sync data from platforms like Google Drive and Notion. ",
    image: "lightblue",
  },
  {
    id: "panel2",
    title: "3:  Define Actions & Conversation Starters",
    description:
      "Seamlessly upload your files, such as PDFs, Word documents, add a Website or sync data from platforms like Google Drive and Notion. ",
    image: "black",
  },
  {
    id: "panel3",
    title: "4:  Embed or Integrate with Your Applications",
    description:
      "Seamlessly upload your files, such as PDFs, Word documents, add a Website or sync data from platforms like Google Drive and Notion. ",
    image: "pink",
  },
  {
    id: "panel4",
    title: "5:  Monitor Conversations & Gain Insights",
    description:
      "Seamlessly upload your files, such as PDFs, Word documents, add a Website or sync data from platforms like Google Drive and Notion. ",
    image: "lightCoral",
  },
];

const AgentTraining = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel0");
  const [image, setImage] = React.useState("gray");
  const handleChange =
    (panel: PanelData) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      console.log(panel);
      setExpanded(isExpanded ? panel.id : false);
      setImage(panel.image);
    };
  return (
    <Box
      sx={{
        py: { xs: "30px", md: 0 },
        bgcolor: "custom.cream",
        px: { xs: "30px", md: "100px" },
        minHeight: "100dvh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SubHeading width={{ xs: "auto", md: "500px" }} textAlign="center">
        Learn how Atenxion quickly understands and trains your agent
      </SubHeading>
      <Box
        sx={{
          mt: { xs: "30px", md: "60px" },
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <Box
          width={{ xs: "100%", md: "50%" }}
          height={{ xs: "300px", md: "500px" }}
          bgcolor={image}
        ></Box>
        <Box width={{ xs: "100%", md: "40%" }}>
          <AgentTrainingAccordion
            data={data}
            handleChange={handleChange}
            expanded={expanded}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AgentTraining;
