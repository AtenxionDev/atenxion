import { Box } from "@mui/material";
import Heading from "../../typeface/Heading";
import BodyText from "../../typeface/BodyText";
import ButtonComponent from "../../common/ButtonComponent";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <Box>
      <Box
        display="flex"
        bgcolor="custom.white"
        alignContent="center"
        justifyContent="center"
        height={{
          xs: "auto",
          md: "600px",
          lg: "calc(100vh - 75px)",
          xl: "70vh",
        }}
        pb={{ xs: "30px", sm: "50px", md: "90px", lg: "120px" }}
        pt={{ xs: "30px", sm: "50px", md: "50px", lg: "120px", xl: "50px" }}
        width="100vw"
        maxWidth="100vw"
        style={{
          overflow: "hidden",
        }}
        position="relative"

        // px={{ xs: "30px", sm: "50px", md: "90px", lg: "120px" }}
      >
        <Box
          maxWidth={{ lg: "1200px", xl: "1400px" }}
          display="flex"
          alignItems="center"
          width="100%"
          flexDirection={{ xs: "column", md: "row" }}
          gap={{ md: 10, xs: 4 }}
          px={{ lg: 0, md: 8, sm: 6, xs: 4 }}
          zIndex={10}
        >
          <Box display="flex" flexDirection="column" gap="16px" flex={1}>
            <Box width={{ sm: "400px", md: "400px", lg: "450px", xl: "500px" }}>
              <Heading color="custom.black">
                Build AI-driven experiences for your enterprise
              </Heading>
            </Box>
            <BodyText
              variant="large"
              color="custom.black"
              lineHeight="24px"
              width={{ sm: "400px", md: "40%", lg: "450px", xl: "500px" }}
            >
              Create tailored AI agents for your enterprise in minutes without
              any code. Seamlessly integrate with your existing systems,
              automate processes, and enhance customer interactions.
            </BodyText>

            <Box display="flex" flexDirection="row" gap={2} pt={2}>
              <Link href="/book-a-demo" style={{ textDecoration: "none" }}>
                <ButtonComponent label="Book a demo" />
              </Link>
            </Box>
          </Box>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            position={{ xs: "unset", md: "absolute", xl: "unset" }}
            right={{ md: 0, lg: 0, xl: "unset" }}
            marginRight={{ xs: 0, md: -20, lg: -20, xl: 0 }}
            maxWidth={{ xs: "100%", lg: "900px", md: "700px" }}
          >
            <Image
              src="/assets/hero.png"
              width={950}
              height={1200}
              alt="hero"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
        <Box
          position="absolute"
          zIndex={0}
          top={0}
          display={{ xs: "none", md: "block" }}
          // height="fit-content"
          right={{ md: 0, lg: 20, xl: "20vw" }}
          // marginRight={{ xs: 0, md: -20, lg: -0, xl: 0 }}
          // maxHeight={{
          //   xs: "auto",
          //   md: "600px",
          //   lg: "calc(100vh - 75px)",
          //   xl: "70vh",
          // }}
        >
          <img
            src="/assets/vector.png"
            alt="vector"
            className="vector"
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
