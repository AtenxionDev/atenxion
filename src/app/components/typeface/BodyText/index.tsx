"use client";
import theme from "@/app/utils/theme";
import { Typography, TypographyProps } from "@mui/material";
import React, { ReactNode } from "react";

interface BodyTextProps extends Omit<TypographyProps, "variant"> {
  children: ReactNode;
  weight?: "regular" | "medium" | "semibold";
  variant: "large" | "medium" | "small";
  color?: string;
  component?: "span";
  lineHeight?: string;
  // props?: React.ComponentProps<typeof Typography>;
}

const BodyText = ({
  children,
  weight,
  variant,
  color,
  component,
  lineHeight,
  ...props
}: BodyTextProps) => {
  const weightDic = {
    regular: 400,
    medium: 500,
    semibold: 600,
  };
  const defaultWeight = variant === "large" ? "medium" : "regular";
  switch (variant) {
    case "large":
      return (
        <Typography
          {...props}
          sx={{
            fontWeight: weight ? weightDic[weight] : defaultWeight,
            fontSize: { md: "16px", xl: "18px" },
            lineHeight: lineHeight ? lineHeight : "100%",
            color: color ? color : theme.palette.custom.black,
          }}
        >
          {children}
        </Typography>
      );
    case "medium":
      return (
        <Typography
          {...props}
          sx={{
            fontWeight: weight ? weightDic[weight] : defaultWeight,
            fontSize: { md: "14px", xl: "16px" },
            lineHeight: lineHeight ? lineHeight : "125%",
            color: color ? color : theme.palette.custom.black,
          }}
          component={component ? component : "p"}
        >
          {children}
        </Typography>
      );
    case "small":
      return (
        <Typography
          {...props}
          sx={{
            fontWeight: weight ? weightDic[weight] : defaultWeight,
            fontSize: { md: "12px", xl: "14px" },
            lineHeight: lineHeight ? lineHeight : "125%",
            color: color ? color : theme.palette.custom.black,
          }}
        >
          {children}
        </Typography>
      );
  }
};

export default BodyText;
