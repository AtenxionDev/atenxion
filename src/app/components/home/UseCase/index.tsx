import { Box } from "@mui/material";
import React from "react";
import SubHeading from "../../typeface/SubHeading";
import UseCaseCard from "../../UseCaseCard";

const UseCase = () => {
  return (
    <Box
      sx={{
         py: {xs:"30px",md:0},
        px: {xs:"30px",md:"100px"},
        minHeight: "100dvh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SubHeading width={{xs:"auto",md:"500px"}} textAlign="center">
        Learn how Atenxion helping through across different use cases
      </SubHeading>
      {/* parent */}
      <Box
        sx={{
          mt: {xs:"30px",md:"60px"},
          width: {xs:"100%" ,md:"70%"},
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* first row */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "stretch",
            gap: "20px",
          }}
        >
          <UseCaseCard
            title="Customer Engagement"
            description="Empower your business with a 24/7 AI-powered chatbot to handle customer
        service inquiries instantly. Reduce support tickets and lower service
        costs without compromising on quality, ensuring a seamless support
        experience."
            height="300px"
            width="60%"
          />
          <UseCaseCard
            title="Lead Generation"
            description="Deploy your AI Agent to collect and qualify leads, providing
              personalized interactions that drive engagement. Enhance your
              sales strategy with actionable insights derived from user
              interactions."
            height="100%"
            width="40%"
          />
        </Box>

        {/* second row */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row-reverse" },
            justifyContent: "center",
            alignItems: "stretch",
            gap: "20px",
          }}
        >
          <UseCaseCard
            title="Enterprise Knowledgebase"
            description="Enable conversational queries across internal knowledge sources, integrating data from diverse sources such as documents, databases, and cloud storage platforms like Google Drive."
            height="250px"
            width="60%"
          />
          <UseCaseCard
            title="AI Copilots Tailored to Your Industry"
            description="Offering tailored support, real-time assistance, and seamless interactions in Finance, Telco, Real Estate, Healthcare, and beyond."
            height="100%"
            width="40%"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default UseCase;
