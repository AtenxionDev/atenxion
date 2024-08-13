import { Box, Divider } from "@mui/material";
import BodyText from "../../typeface/BodyText";
import ButtonComponent from "../../common/ButtonComponent";
import SubHeading from "../../typeface/SubHeading";
import Image from "next/image";

function BookDemo() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        bgcolor="secondary.main"
        boxSizing="border-box"
        height="382px"
        alignItems="center"
        mt={5}
        gap={2}
        py={10}
        mx={{ xs: "30px", sm: "40px", md: "60px", lg: "90px" }}
        position="relative"
        borderRadius="16px"
      >
        <Box
          position="absolute"
          display="flex"
          left={{ xs: "0", sm: "14%", md: "22%", lg: "29%" }}
        >
          <Image
            src="/assets/person.svg"
            width={200}
            height={468}
            alt="person"
          />
        </Box>

        <Box display="flex" flexDirection="column" gap={2} textAlign="center">
          <SubHeading color="custom.white">
            Step into the Future with AI Agents
          </SubHeading>
          <BodyText variant="medium" color="custom.white">
            Discover how easy it is to create your own custom AI agent in
            minutes.
          </BodyText>

          <Box
            display="flex"
            flexDirection="row"
            gap={2}
            pt={2}
            alignItems="center"
            justifyContent="center"
          >
            <ButtonComponent label="Book a demo" />
            <ButtonComponent
              label="Contact us"
              color="transparent"
              border="1px solid"
            />
          </Box>
        </Box>
      </Box>
      <Box height="150px"></Box>
      <Divider />
    </>
  );
}

export default BookDemo;
