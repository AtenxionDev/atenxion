import { Box } from "@mui/material";
import Heading from "../../typeface/Heading";
import BodyText from "../../typeface/BodyText";
import Image from "next/image";

function Integration() {
  return (
    <Box display="flex" justifyContent="center" py={{ lg: 8, md: 6, xs: 6 }}>
      <Box
        width={{ lg: "1000px", md: "85%", xs: "100%" }}
        flexDirection={{ md: "row", xs: "column" }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Box
          maxWidth={{ lg: "500px", md: "450px", sm: "70%", xs: "90%" }}
          textAlign={{ md: "revert", xs: "center" }}
        >
          <Heading color="black">
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

        <Box>
          <Image
            src="/assets/integration.svg"
            alt="integration"
            width={300}
            height={400}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Integration;
