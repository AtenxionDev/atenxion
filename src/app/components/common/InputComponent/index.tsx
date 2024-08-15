import { Box } from "@mui/material";
import React from "react";
import BodyText from "../../typeface/BodyText";

interface InputComponentProps {
  label: string;
  type?: string;
  id: string;
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  code?: string;
}

export const InputComponent = ({
  label,
  type,
  id,
  value,
  handleChange,
  disabled,
  required,
  code,
}: InputComponentProps) => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={1} width={"100%"}>
      <BodyText variant="medium" weight="medium">
        {label}
      </BodyText>
      <Box display={"flex"} gap={1}>
        {/* for phone code  */}
        {id === "phone" && (
          <Box width={70}>
            <input
              maxLength={4}
              style={{
                cursor: "pointer",
                textAlign: "center",
                width: "100%",
                height: "40px",
                borderRadius: "8px",
                border: "1px solid black",
                outline: "none",
                fontSize: "15px",
                padding: "2px",
                backgroundColor: "white",
                appearance: "none",
                MozAppearance: "none",
                WebkitAppearance: "none",
                backgroundImage: "none",
              }}
              type="text"
              value={code}
              id="code"
              onChange={handleChange}
            />
          </Box>
        )}

        <input
          style={{
            width: "100%",
            height: "40px",
            borderRadius: "8px",
            border: "1px solid black",
            outline: "none",
            fontSize: "15px",
            padding: "8px",
          }}
          type={type || "text"}
          id={id}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          maxLength={id === "phone" ? 10 : 150}
        />
      </Box>
    </Box>
  );
};
