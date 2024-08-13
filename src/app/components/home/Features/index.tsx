import { features } from "@/app/data/features";
import FeatureComponent from "./FeatureComponent";
import { Box } from "@mui/material";

function Features() {
  return (
    <Box display="flex" justifyContent="center">
      <Box className="container">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={{ md: 8, xs: 4 }}
          flexWrap="wrap"
          width="100%"
          py={{ md: 8, xs: 4 }}
        >
          {features.map((feature) => (
            <FeatureComponent feature={feature} key={feature.title} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Features;
