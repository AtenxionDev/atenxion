import { Box } from "@mui/material";
import { howItWorks } from "@/app/data/home";
import BodyText from "../../typeface/BodyText";
import SubHeading from "../../typeface/SubHeading";
interface HowItWorksProps {
  index: number;
  item: {
    title: string;
    description: string;
    icon: string;
  };
}
function HowItWorks() {
  return (
    <Box
      padding={"60px 0px"}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="60px"
    >
      <SubHeading> How it works </SubHeading>
      <Box display={{ lg: "flex" }}>
        {howItWorks.map((item, index) => (
          <HowItWorksComponent
            key={item.title}
            index={index}
            item={item}
          ></HowItWorksComponent>
        ))}
      </Box>
    </Box>
  );
}

function HowItWorksComponent({ index, item }: HowItWorksProps) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap="30px">
      <Box position="relative">
        <Box width="204px" height="204px" borderRadius="50%" bgcolor={"#eee"}>
          <Box
            width="60px"
            height="60px"
            borderRadius="50%"
            bgcolor="#fff"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            bottom={0}
            right={0}
            boxShadow="0px 4px 12px 0px #00000014"
            color="#000"
            fontSize="24px"
            fontWeight={600}
          >
            {index + 1}
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        width="60%"
        gap="8px"
      >
        <BodyText variant="large" weight={"semibold"}>
          {item.title}
        </BodyText>
        <BodyText variant="medium">{item.description}</BodyText>
      </Box>
    </Box>
  );
}

export default HowItWorks;
