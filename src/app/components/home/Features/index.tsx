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
        <Box display="flex" justifyContent="center">
          <Box maxWidth={{ lg: "1200px", xl: "1400px" }}>
            <EmpowerAspects />
            <Box
              display="flex"
              alignItems="center"
              justifyContent={{ lg: "flex-start", xs: "center" }}
              gap={{ xs: 4, md: 4, lg: 3, xl: 10 }}
              rowGap={{ xs: 4, md: 4, lg: 4, xl: 8 }}
              flexWrap="wrap"
              width="100%"
              pt={{ md: 8, sm: 6, xs: 4 }}
              pb={{ md: 8, xs: 0 }}
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
