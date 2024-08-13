import { Box } from "@mui/material";
import AgentTraining from "./components/home/AgentTraining";
import UseCase from "./components/home/UseCase";

export default function Home() {
  return (
    <Box >
      <AgentTraining />
      <UseCase />
    </Box>
  );
}
