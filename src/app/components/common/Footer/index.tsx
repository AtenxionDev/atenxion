import React from "react";
import { Box } from "@mui/material";
import BodyText from "../../typeface/BodyText";
import Heading from "../../typeface/Heading";

const features = [
  { title: "How it works", link: "/how-it-works" },
  { title: "Features", link: "/features" },
  { title: "Usecases", link: "/usecases" },
];

const documentation = [
  { title: "Documentation", link: "/documentation" },
  { title: "How to use", link: "/how-to-use" },
  { title: "Contact us", link: "/contact-us" },
  { title: "Book a demo", link: "/book-demo" },
];

function Footer() {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"row"}
        width={"100%"}
        bgcolor={"#121212"}
        height={"285px"}
        p={8}
      >
        <Box display={"flex"} flexDirection={"column"} flex={1} gap={1}>
          <Heading>Atenxion</Heading>
          <BodyText variant="medium" weight="semibold" color="#FAFAFA">
            Generative AI Innovative Studio
          </BodyText>
        </Box>

        <Box display="flex" flexDirection={"column"} gap={2}>
          {features.map((item) => (
            <BodyText key={item.title} variant="medium" color="#FAFAFA">
              <a
                href={item.link}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {item.title}
              </a>
            </BodyText>
          ))}
        </Box>

        <Box display="flex" flexDirection={"column"} gap={2} px={5}>
          {documentation.map((item) => (
            <BodyText key={item.title} variant="medium" color="#FAFAFA">
              <a
                href={item.link}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {item.title}
              </a>
            </BodyText>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Footer;
