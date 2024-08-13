import React from "react";
import { Box } from "@mui/material";
import BodyText from "../../typeface/BodyText";
import Heading from "../../typeface/Heading";

const features = [
  { title: "How it works", link: "/" },
  { title: "Features", link: "/" },
  { title: "Usecases", link: "/" },
];

const documentation = [
  { title: "Documentation", link: "/" },
  { title: "Contact us", link: "/" },
  { title: "Privacy policy", link: "/" },
  { title: "Terms & conditions", link: "/" },
];

const contacts = [
  { title: "company@mail.com", link: "/" },
  { title: "+99 12345689", link: "/" },
];

function Footer() {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={{ sm: "column", md: "row" }}
        gap={{ sm: 8 }}
        width={"100%"}
        bgcolor={"#fff"}
        p={8}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          width={"50%"}
        >
          <Heading>Atenxion</Heading>
          <Box sx={{ opacity: 0.5 }}>
            <BodyText variant="medium"> © 2024 Atenxion </BodyText>
          </Box>
        </Box>

        <Box display={"flex"} gap={10}>
          <Box display="flex" flexDirection={"column"} gap={2}>
            <BodyText variant="medium" weight="bold">
              Product
            </BodyText>
            {features.map((item) => (
              <BodyText key={item.title} variant="medium" color="custom.black">
                <a
                  href={item.link}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {item.title}
                </a>
              </BodyText>
            ))}
          </Box>

          <Box display="flex" flexDirection={"column"} gap={2}>
            <BodyText variant="medium" weight="bold">
              Resources
            </BodyText>
            {documentation.map((item) => (
              <BodyText key={item.title} variant="medium" color="custom.black">
                <a
                  href={item.link}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {item.title}
                </a>
              </BodyText>
            ))}
          </Box>

          <Box display="flex" flexDirection={"column"} gap={2}>
            <BodyText variant="medium" weight="bold">
              Contact us
            </BodyText>
            {contacts.map((item) => (
              <BodyText key={item.title} variant="medium" color="custom.black">
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
      </Box>
    </>
  );
}

export default Footer;
