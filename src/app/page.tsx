import { Box } from "@mui/material";
import AgentTraining from "./components/home/AgentTraining";
import HowItWorks from "./components/home/HowItWorks";
import Ideation from "./components/home/Ideation";
import UseCase from "./components/home/UseCase";

export default function Home() {
  return (
    <Box >
      <AgentTraining />
      {/* <Ideation /> */}
      <UseCase />
    </Box>
  );
}
