import { Box, Typography } from "@mui/material";
import { FormikErrors, FormikTouched } from "formik";
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
  errors?: any;
  touched?: FormikTouched<any> | any;
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
  errors,
  touched,
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
              name={id}
              id="code"
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
          name={id}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className="customFont"

          // required={required}
        />
      </Box>
      {errors && touched && (
        <Typography fontSize="12px" color="red" mx="2px">
          {errors}
        </Typography>
      )}
    </Box>
  );
};
