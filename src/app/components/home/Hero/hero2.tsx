import { Box } from "@mui/material";
import Heading from "../../typeface/Heading";
import BodyText from "../../typeface/BodyText";
import ButtonComponent from "../../common/ButtonComponent";
import Image from "next/image";

function Hero2() {
  return (
    <Box
      display="flex"
      bgcolor="white"
      alignContent="center"
      justifyContent="center"
      height={{ xs: "auto", lg: "calc(100vh - 75px)", xl: "70vh" }}
      pb={{ xs: "30px", sm: "50px", md: "90px", lg: "120px" }}
      pt={{ xs: "30px", sm: "50px", md: "50px", lg: "120px", xl: "50px" }}

      // px={{ xs: "30px", sm: "50px", md: "90px", lg: "120px" }}
    >
      <Box
        maxWidth={{ lg: "1200px", xl: "1400px" }}
        display="flex"
        alignItems="center"
        width="100%"
        flexDirection={{ xs: "column", lg: "row" }}
        gap={10}
        px={{ md: 8, xs: 4 }}
      >
        <Box display="flex" flexDirection="column" gap="16px" flex={1}>
          <Box width={{ sm: "400px", md: "500px", lg: "450px", xl: "500px" }}>
            <Heading color="custom.black">
              Build{" "}
              <span style={{ color: "#1C64FF" }}>AI-driven experiences </span>
              for your enterprise
            </Heading>
          </Box>
          <BodyText
            variant="medium"
            color="custom.black"
            lineHeight="24px"
            width={{ sm: "400px", md: "500px", lg: "450px", xl: "500px" }}
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
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Image
            src="/assets/hero-image.png"
            width={570}
            height={425}
            alt="hero"
            style={{
              maxWidth: "90%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Hero2;
