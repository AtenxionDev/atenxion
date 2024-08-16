"use client";
import { useEffect, useState } from "react";
import { navigation } from "@/app/data/navigation";
import { Box } from "@mui/material";
import { useWindowDimensions } from "@/app/hooks/useWindowDimensions";
import { useScrollPositions } from "@/app/hooks/useScrollPositions";
import BodyText from "../../typeface/BodyText";
import ButtonComponent from "../ButtonComponent";
import Link from "next/link";
import Image from "next/image";

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
      zIndex={100}
      bgcolor="white"
      // bgcolor={!show ? "secondary.main" : "#fff"}
      display={"flex"}
      justifyContent={"center"}
      // px={{ md: 5, lg: 7 }}
      boxShadow="0px 16px 48px 0px rgba(0, 0, 0, 0.02)"
      border={{ xs: "1px solid custom.darkGrey", sm: "none" }}
      // boxShadow={{
      //   xs: scrolled || show ? "0px 16px 48px 0px rgba(0, 0, 0, 0.02)" : "none",
      // }}
      // border={{ xs: scrolled || show ? "1px solid custom.darkGrey" : "none" }}
    >
      <Box
        width="100%"
        maxWidth={{ xs: "100%", lg: "1440px" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {/* menu button */}
        <Box
          display={{ md: "block", lg: "none" }}
          zIndex={100}
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
              fill="custom.black"
              // fill={!show ? "#fff" : "secondary.main"}
            >
              <path d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7a1 1 0 00-1.41 1.41L10.59 12l-4.89 4.89a1 1 0 101.41 1.41L12 13.41l4.89 4.89a1 1 0 001.41-1.41L13.41 12l4.89-4.89a1 1 0 000-1.41z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="custom.black"
            >
              <path d="M3 6h18c0.55 0 1 0.45 1 1s-0.45 1-1 1H3C2.45 8 2 7.55 2 7s0.45-1 1-1zm0 5h18c0.55 0 1 0.45 1 1s-0.45 1-1 1H3c-0.55 0-1-0.45-1-1s0.45-1 1-1zm0 5h18c0.55 0 1 0.45 1 1s-0.45 1-1 1H3c-0.55 0-1-0.45-1-1s0.45-1 1-1z" />
            </svg>
          )}
        </Box>

        {/* logo */}
        <Box mx={{ xs: 4 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Image
              // src={
              //   scrolled || show
              //     ? "/assets/atenxion-black.png"
              //     : "/assets/atenxion.png"
              // }
              src={"/assets/atenxion-black.png"}
              width={200}
              height={40}
              alt="atenxion"
            />
            {/* <BodyText
              variant="large"
              color={!show ? " #fff" : "secondary.main"}
              weight={!show ? "regular" : "bold"}
            >
              Atenxion
            </BodyText> */}
          </Link>
        </Box>

        {/* Menu items */}
        <Box
          display={{ xs: openResponsiveNav ? "flex" : "none", lg: "flex" }}
          flexDirection={{ xs: "column", lg: "row" }}
          position={{ xs: "absolute", lg: "unset" }}
          top={{ xs: "73px" }}
          alignItems={"center"}
          gap={{ xs: 2, lg: "52px" }}
          bgcolor="white"
          // bgcolor={{ xs: !show ? "secondary.main" : "#fff", lg: "transparent" }}
          width={{ xs: "100%", lg: "fit-content" }}
          pb={{ xs: 4, lg: 0 }}
          pr={{ lg: 4 }}
        >
          {navigation?.map((item) => (
            <a
              key={item.title}
              href={item.link}
              style={{ textDecoration: "none" }}
              onClick={() => {
                if (openResponsiveNav) {
                  setOpenResponsiveNav(false);
                }
              }}
            >
              <Box key={item.title} sx={{ cursor: "pointer" }}>
                <BodyText
                  variant="medium"
                  color="custom.black"
                  weight="semibold"
                  // color={!show ? " #fff" : "secondary.main"}
                  // weight={!show ? "regular" : "semibold"}
                >
                  {item.title}
                </BodyText>
              </Box>
            </a>
          ))}
          <Link href="/book-a-demo" style={{ textDecoration: "none" }}>
            <ButtonComponent label="Book a demo" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
