import BodyText from "@/app/components/typeface/BodyText";
import { Feature } from "@/app/data/features";
import { Box } from "@mui/material";
import Image from "next/image";

function FeatureComponent({ feature }: { feature: Feature }) {
  return (
    <Box
      width={{ xl: "290px", md: "280px", sm: "250px", xs: "80%" }}
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <Image src={feature.icon} alt={feature.title} width={40} height={40} />
      <BodyText variant="large" weight="bold">
        {feature.title}
      </BodyText>
      <BodyText variant="medium" weight="regular">
        {feature.description}
      </BodyText>
    </Box>
  );
}

export default FeatureComponent;
