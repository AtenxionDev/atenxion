import { Box } from "@mui/material";
import AgentTraining from "./components/home/AgentTraining";
import UseCase from "./components/home/UseCase";
import BookDemo from "./components/home/BookDemo";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import Integration from "./components/home/Integration";
import "react-phone-number-input/style.css";

export default function Home() {
  return (
    <Box>
      <Hero />
      <AgentTraining />
      <Features />
      <UseCase />
      <Integration />
      <BookDemo />
    </Box>
  );
}
