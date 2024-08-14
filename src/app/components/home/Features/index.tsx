import { features } from "@/app/data/features";
import FeatureComponent from "./FeatureComponent";
import { Box } from "@mui/material";
import Heading from "../../typeface/Heading";
import Layout from "../../common/Layout";
import Image from "next/image";
import BodyText from "../../typeface/BodyText";
import EmpowerAspects from "./EmpowerAspects";

function Features() {
  return (
    <Layout>
      <Box id="features">
        <EmpowerAspects />

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
      </Box>
    </Layout>
  );
}

export default Features;
