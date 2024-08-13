import { Box } from "@mui/material";
import AgentTraining from "./components/home/AgentTraining";
import UseCase from "./components/home/UseCase";
import BookDemo from "./components/home/BookDemo";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <Box>
      <Hero />
      <AgentTraining />
      <UseCase />
      <BookDemo />
    </Box>
  );
}
