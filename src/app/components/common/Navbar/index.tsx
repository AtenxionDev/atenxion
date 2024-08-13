"use client";
import { useEffect, useState } from "react";
import { navigation } from "@/app/data/navigation";
import { Box } from "@mui/material";
import { useWindowDimensions } from "@/app/hooks/useWindowDimensions";
import { useScrollPositions } from "@/app/hooks/useScrollPositions";
import BodyText from "../../typeface/BodyText";
import ButtonComponent from "../ButtonComponent";

interface IProps {
  updateNavState?: boolean;
}

function Navbar({ updateNavState = true }: IProps) {
  const { height } = useWindowDimensions();
  const { scrollY } = useScrollPositions();
  const [show, setShow] = useState<boolean>(false);

  const [scrolled, setScrolled] = useState<boolean>();
  // const [openResponsiveNav, setOpenResponsiveNav] = useState<boolean>(false);

  useEffect(() => {
    if (updateNavState) {
      const temp = height && scrollY ? scrollY > height : false;
      setShow(temp);
    } else {
      setShow(true);
    }
    if (show && scrollY && scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Box
      width="100%"
      height="75px"
      position="sticky"
      top={0}
      zIndex={10}
      bgcolor={!show ? "secondary.main" : "#fff"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      px={{ md: 5, lg: 7 }}
      style={{
        boxShadow:
          scrolled || show ? "0px 16px 48px 0px rgba(0, 0, 0, 0.02)" : "none",
        border: scrolled || show ? "1px solid #e9eced" : "none",
      }}
    >
      <Box>
        <BodyText variant="large" color={!show ? " #fff" : "secondary.main"}>
          Atenxion
        </BodyText>
      </Box>
      <Box display={"flex"} alignItems={"center"} gap={"52px"}>
        {navigation?.map((item) => (
          <Box key={item.title} sx={{ cursor: "pointer" }}>
            <BodyText
              variant="medium"
              color={!show ? " #fff" : "secondary.main"}
              weight={!show ? "regular" : "semibold"}
            >
              {item.title}
            </BodyText>
          </Box>
        ))}
        <ButtonComponent label="Contact us" color={"primary.main"} />
      </Box>
    </Box>
  );
}

export default Navbar;
