import { Box } from "@mui/material";
import React from "react";
import UseCaseCard from "../../UseCaseCard";
import Image from "next/image";
import Heading from "../../typeface/Heading";

const UseCase = () => {
  return (
    <Box
      sx={{
        py: { xs: "30px", md: 4 },
        px: { xs: "30px", md: 0 },
        // minHeight: "100dvh",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        id="usecases"
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
      <Box maxWidth={{ xs: "100%", md: "85%", lg: "1100px", xl: "1200px" }}>
        <Box textAlign="center">
          <Heading color="custom.black">
            Learn how Atenxion helping is through
            <br /> across different use cases
          </Heading>
        </Box>

        {/* parent */}
        <Box
          sx={{
            mt: { xs: "30px", md: "60px" },
            width: { xs: "100%", md: "100%", lg: "100%" },
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
              height="400px" //height for row 1
              width="60%"
              image={
                <Box
                  sx={{
                    alignSelf: "end",
                    flex: 1,
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "end",
                    width: "80%",
                    height: "100%",
                  }}
                >
                  <Image
                    src={"/assets/customer.png"}
                    style={{ aspectRatio: "auto" }}
                    layout="responsive"
                    width={200}
                    height={200}
                    alt="customer-engagement-image"
                  />
                </Box>
              }
            />
            <UseCaseCard
              title="AI copilots tailored to your industry"
              description="Offering tailored support, real-time assistance, and seamless interactions in Finance, Telco, Real Estate, Healthcare, and beyond."
              height="100%"
              width="40%"
              image={
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "70%",
                    height: "100%",
                    mx: "auto",
                  }}
                >
                  <Image
                    src={"/assets/tailor.svg"}
                    objectFit="contain"
                    layout="responsive"
                    style={{ aspectRatio: "auto" }}
                    width={300}
                    height={150}
                    alt="knowledge.png"
                  />
                </Box>
              }
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
              height="350px" //height for row 2
              width="60%"
              image={
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "70%",
                    height: "100%",
                    mx: "auto",
                  }}
                >
                  <Image
                    src={"/assets/knowledge.png"}
                    objectFit="contain"
                    layout="responsive"
                    style={{ aspectRatio: "auto" }}
                    width={300}
                    height={150}
                    alt="knowledge.png"
                  />
                </Box>
              }
            />
            <UseCaseCard
              title="Lead generation"
              description="Deploy your AI Agent to collect and qualify leads, providing personalized interactions that drive engagement. Enhance your sales strategy with actionable insights derived from user interactions."
              height="100%"
              width="40%"
              image={
                <Box
                  sx={{
                    flex: 1,
                    width: "95%",
                    height: "100%",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "end",
                    // aspectRatio: 'auto'
                  }}
                >
                  <Image
                    src={"/assets/lead.svg"}
                    objectFit="contain"
                    style={{ aspectRatio: 1 }}
                    width={200}
                    height={150}
                    alt="customer-engagement-image"
                  />
                </Box>
              }
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UseCase;
