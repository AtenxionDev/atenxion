import React from "react";
import { Box } from "@mui/material";
import BodyText from "../../typeface/BodyText";
import SubHeading from "../../typeface/SubHeading";
import { navigation } from "@/app/data/navigation";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const documentation = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/company/atenxion",
    icon: <FaLinkedin />,
  },
  {
    title: "Facebook",
    link: "https://www.facebook.com/Atenxion",
    icon: <FaFacebook />,
  },
];

const contacts = [
  { title: "sales@atenxion.ai", link: "mailto:sales@atenxion.ai" },
  { title: "+65 9632 2602", link: "tel:+65 96322602" },
];

function Footer() {
  return (
    <>
      <Box display={"flex"} justifyContent="center">
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          gap={{ xs: 3 }}
          width={"100%"}
          maxWidth={{ lg: "1240px", xl: "1440px" }}
          bgcolor={"#fff"}
          py={8}
          px={{ xs: "30px", sm: "40px", md: "60px", lg: "40px" }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={{ xs: "start", lg: "space-between" }}
            gap={{ xs: 2, lg: 0 }}
            flex={1}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              gap={1}
            >
              {/* <SubHeading>Atenxion</SubHeading> */}
              <Box>
                <Image
                  src={"/assets/atenxion-black.png"}
                  width={200}
                  height={40}
                  alt="atenxion"
                />
              </Box>
              <BodyText variant="medium">
                No Code Gen AI for Enterprise
              </BodyText>
            </Box>
            <Box sx={{ opacity: 0.5 }}>
              <BodyText variant="medium"> © 2024 Atenxion </BodyText>
            </Box>
          </Box>

          <Box
            display={"flex"}
            flexDirection={{ xs: "column", sm: "row" }}
            justifyContent={{ md: "end", xs: "space-between" }}
            gap={{ xs: 4, sm: 10 }}
          >
            <Box display="flex" flexDirection={"column"} gap={2}>
              <BodyText variant="medium" weight="bold">
                Product
              </BodyText>
              {navigation.map((item) => (
                <BodyText
                  key={item.title}
                  variant="medium"
                  color="custom.black"
                >
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
                <Box
                  key={item.title}
                  display={"flex"}
                  alignItems={"center"}
                  gap={"4px"}
                  height={"20px"}
                >
                  <span style={{ marginBottom: "-4px" }}>{item.icon}</span>

                  <BodyText
                    key={item.title}
                    variant="medium"
                    color="custom.black"
                  >
                    <a
                      href={item.link}
                      style={{ color: "inherit", textDecoration: "none" }}
                      target="_blank"
                    >
                      {item.title}
                    </a>
                  </BodyText>
                </Box>
              ))}
            </Box>

            <Box display="flex" flexDirection={"column"} gap={2}>
              <BodyText variant="medium" weight="bold">
                Contact us
              </BodyText>
              {contacts.map((item) => (
                <BodyText
                  key={item.title}
                  variant="medium"
                  color="custom.black"
                >
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
      </Box>
    </>
  );
}

export default Footer;
