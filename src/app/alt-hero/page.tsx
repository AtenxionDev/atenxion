import { Box } from "@mui/material";
import AgentTraining from "../components/home/AgentTraining";
import UseCase from "../components/home/UseCase";
import BookDemo from "../components/home/BookDemo";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Integration from "../components/home/Integration";
import Hero2 from "../components/home/Hero/hero2";

export default function HomeAlt() {
  return (
    <Box>
      <Hero2 />
      <AgentTraining />
      <Features />
      <UseCase />
      <Integration />
      <BookDemo />
    </Box>
  );
}
