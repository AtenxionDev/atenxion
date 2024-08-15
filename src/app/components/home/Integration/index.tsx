import { Box } from "@mui/material";
import Heading from "../../typeface/Heading";
import BodyText from "../../typeface/BodyText";
import Image from "next/image";

function Integration() {
  return (
    <Box display="flex" justifyContent="center" py={{ lg: 8, md: 6, xs: 2 }}>
      <Box
        maxWidth={{ xs: "100%", md: "85%", lg: "1100px", xl: "1200px" }}
        flexDirection={{ md: "row", xs: "column" }}
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Box
          maxWidth={{
            xl: "600px",
            lg: "500px",
            md: "410px",
            sm: "70%",
            xs: "90%",
          }}
          textAlign={{ md: "revert", xs: "center" }}
        >
          <Heading color="custom.black">
            Empower your AI <br /> agents with any data
          </Heading>
          <BodyText variant="medium" my={3}>
            Effortlessly ingest data from various sources, including websites,
            documents, and folders, to train your AI agent. With Atenxion,
            seamlessly integrate and train your AI using custom data from your
            existing tools and platforms, allowing users to interact with it
            wherever they are.
          </BodyText>
        </Box>

        <Box px={{ md: 0, xs: 4 }} width={{ md: "350px", lg: "auto" }}>
          <Image
            src="/assets/integration-new.svg"
            alt="integration"
            width={550}
            height={450}
            style={{ maxWidth: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Integration;
