import React from "react";
import { Box } from "@mui/material";
import BodyText from "../../typeface/BodyText";
import SubHeading from "../../typeface/SubHeading";
import { navigation } from "@/app/data/navigation";

const documentation = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/company/atenxion",
  },
  {
    title: "Facebook",
    link: "https://www.facebook.com/Atenxion",
  },
];

const contacts = [
  { title: "win@brillar.io", link: "/" },
  { title: "+65 96322602", link: "/" },
];

function Footer() {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        gap={{ xs: 3 }}
        width={"100%"}
        bgcolor={"#fff"}
        py={8}
        px={{ xs: "30px", sm: "40px", md: "60px", lg: "90px" }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          flex={1}
        >
          <SubHeading>Atenxion</SubHeading>
          <Box sx={{ opacity: 0.5 }}>
            <BodyText variant="medium"> © 2024 Atenxion </BodyText>
          </Box>
        </Box>

        <Box
          display={"flex"}
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent={{ md: "end" }}
          gap={{ xs: 4, sm: 10 }}
        >
          <Box display="flex" flexDirection={"column"} gap={2}>
            <BodyText variant="medium" weight="bold">
              Product
            </BodyText>
            {navigation.map((item) => (
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
              Socials
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
