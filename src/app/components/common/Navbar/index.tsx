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
  const [openResponsiveNav, setOpenResponsiveNav] = useState<boolean>(false);

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
      boxShadow={{
        md: scrolled || show ? "0px 16px 48px 0px rgba(0, 0, 0, 0.02)" : "none",
      }}
      border={{ md: scrolled || show ? "1px solid #e9eced" : "none" }}
    >
      {/* menu button */}
      <Box
        display={{ sm: "block", md: "none" }}
        position={"absolute"}
        right={36}
        sx={{ cursor: "pointer" }}
        onClick={() => setOpenResponsiveNav(!openResponsiveNav)}
      >
        {openResponsiveNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill={!show ? "#fff" : "secondary.main"}
          >
            <path d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7a1 1 0 00-1.41 1.41L10.59 12l-4.89 4.89a1 1 0 101.41 1.41L12 13.41l4.89 4.89a1 1 0 001.41-1.41L13.41 12l4.89-4.89a1 1 0 000-1.41z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill={!show ? "#fff" : "secondary.main"}
          >
            <path d="M3 6h18c0.55 0 1 0.45 1 1s-0.45 1-1 1H3C2.45 8 2 7.55 2 7s0.45-1 1-1zm0 5h18c0.55 0 1 0.45 1 1s-0.45 1-1 1H3c-0.55 0-1-0.45-1-1s0.45-1 1-1zm0 5h18c0.55 0 1 0.45 1 1s-0.45 1-1 1H3c-0.55 0-1-0.45-1-1s0.45-1 1-1z" />
          </svg>
        )}
      </Box>

      {/* logo */}
      <Box mx={{ sm: 4, md: 0 }}>
        <BodyText
          variant="large"
          color={!show ? " #fff" : "secondary.main"}
          weight={!show ? "regular" : "bold"}
        >
          Atenxion
        </BodyText>
      </Box>

      {/* Menu items */}
      <Box
        display={{ sm: openResponsiveNav ? "flex" : "none", md: "flex" }}
        flexDirection={{ sm: "column", md: "row" }}
        position={{ sm: "absolute", md: "unset" }}
        top={{ sm: "75px" }}
        alignItems={"center"}
        gap={{ sm: 2, md: "52px" }}
        bgcolor={{ sm: !show ? "secondary.main" : "#fff", md: "transparent" }}
        width={{ sm: "100%", md: "fit-content" }}
        pb={{ sm: 4, md: 0 }}
      >
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
