"use client";
import { Box } from "@mui/material";
import BodyText from "../../typeface/BodyText";
import theme from "@/app/utils/theme";
import { navigation } from "@/app/data/navigation";

function Navbar() {
  return (
    <Box
      width="100%"
      height="75px"
      bgcolor={theme.palette.custom.lightGrey}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={{ lg: "0px 60px", md: "0px 40px", sm: "0px 20px" }}
    >
      <Box>
        <Box>
          <BodyText variant="large" color="#000">
            Atenxion
          </BodyText>
        </Box>
      </Box>

      <Box display="flex" gap="50px" alignItems="center">
        {navigation.map((item) => (
          <Box key={item.title}>
            <BodyText variant="medium"> {item.title}</BodyText>
          </Box>
        ))}

        <Box padding="12px 20px" bgcolor={theme.palette.custom.black}>
          <BodyText variant="medium" color="#fff">
            Contact us
          </BodyText>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
