import { Box } from "@mui/material";
import Heading from "../../typeface/Heading";
import BodyText from "../../typeface/BodyText";
import ButtonComponent from "../../common/ButtonComponent";
import Image from "next/image";

function Hero() {
  return (
    <Box
      display="flex"
      bgcolor="secondary.main"
      alignContent="center"
      justifyContent="center"
      height={{ xs: "auto", lg: "100vh" }}
      pb={{ xs: "30px", sm: "50px", md: "90px", lg: "120px" }}
      // px={{ xs: "30px", sm: "50px", md: "90px", lg: "120px" }}
    >
      <Box
        maxWidth="1200px"
        display="flex"
        alignItems="center"
        width="100%"
        flexDirection={{ xs: "column", lg: "row" }}
        gap={10}
        px={{ md: 8, xs: 4 }}
      >
        <Box display="flex" flexDirection="column" gap="16px" flex={1}>
          <Heading>
            Build{" "}
            <span style={{ color: "#4D85FF" }}>
              AI-driven
              <br /> experiences{" "}
            </span>
            for <br /> your enterprise
          </Heading>
          <BodyText
            variant="medium"
            color="custom.white"
            lineHeight="24px"
            width="400px"
          >
            Create tailored AI agents for your enterprise in minutes without any
            code. Seamlessly integrate with your existing systems, automate
            processes, and enhance customer interactions.
          </BodyText>

          <Box display="flex" flexDirection="row" gap={2} pt={2}>
            <ButtonComponent label="Book a demo" />
            <ButtonComponent
              label="Contact us"
              color="transparent"
              border="1px solid"
            />
          </Box>
        </Box>
        <Box display="flex" flexWrap="wrap">
          <Image
            src="/assets/hero-image.png"
            width={570}
            height={425}
            alt="hero"
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
