"use client";
import theme from "@/app/utils/theme";
import { Box } from "@mui/material";
import SubHeading from "../../typeface/SubHeading";
import BodyText from "../../typeface/BodyText";
import { ideations } from "@/app/data/home";

interface IdeationItemProps {
  title: string;
  description: string;
  icon: string;
}
function Ideation() {
  return (
    <Box
      px={16}
      py={10}
      bgcolor={theme.palette.custom.grey}
      display={"flex"}
      alignItems="start"
    >
      {/* left */}
      <Box width={"40%"} display="flex" flexDirection="column" gap={1}>
        <SubHeading>
          Helping your ideation <br /> into real form
        </SubHeading>
        <BodyText variant="medium">
          Our proven methodologies ensure that we <br /> manage the entire
          development process.
        </BodyText>
      </Box>

      {/* right */}
      <Box display="flex" gap={6} width={"50%"}>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {ideations.slice(0, 4).map((item) => (
            <IdeationItem
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {ideations.slice(4, 8).map((item) => (
            <IdeationItem
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function IdeationItem({ title, description }: IdeationItemProps) {
  return (
    <Box width={"100%"} alignItems="center" display="flex" gap={2}>
      <Box
        width="47px"
        height="47px"
        borderRadius="50%"
        bgcolor={theme.palette.custom.darkGrey}
      ></Box>

      <Box width={"80%"} display="flex" flexDirection="column" gap={1}>
        <BodyText variant="large" weight={"semibold"}>
          {title}
        </BodyText>
        <BodyText variant="medium">{description}</BodyText>
      </Box>
    </Box>
  );
}

export default Ideation;
