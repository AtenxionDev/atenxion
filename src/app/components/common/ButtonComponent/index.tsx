import { Button, CircularProgress } from "@mui/material";
import BodyText from "../../typeface/BodyText";

interface IProps {
  label: string;
  width?: string;
  height?: string;
  border?: string;
  onClick?: any;
  disabled?: boolean;
  loading?: boolean;
  color?: string;
  textColor?: string;
}
function ButtonComponent({
  label,
  width = "fit-content",
  height,
  border,
  onClick,
  disabled = false,
  loading = false,
  color = "custom.black",
  textColor = "custom.white",
}: IProps) {
  return (
    <Button
      onClick={onClick}
      className="button"
      variant="contained"
      disabled={disabled || loading}
      sx={{
        "&:hover": {
          backgroundColor: color,
          boxShadow: "none !important",
        },
        backgroundColor: color,
        width: width,
        textTransform: "none",
        height: height || "48px",
        border: border,
        borderRadius: "8px",
        background: disabled ? "#BBB9BA" : color,
        letterSpacing: 0.5,
        boxShadow: "none",
        px: "20px",
        py: "12px",
      }}
    >
      {loading ? (
        <CircularProgress color="secondary" size={25} />
      ) : (
        <BodyText variant="medium" color={textColor} weight="semibold">
          {label}
        </BodyText>
      )}
    </Button>
  );
}

export default ButtonComponent;
