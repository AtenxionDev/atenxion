import { DefaultToastOptions } from "react-hot-toast";

export const toastOptions: DefaultToastOptions = {
  success: {
    style: {
      background: "black",
      color: "white",
      borderRadius: "12px",
      padding: "12px 20px 12px 20px",
    },
    iconTheme: {
      primary: "white",
      secondary: "black",
    },
  },
  error: {
    style: {
      background: "black",
      color: "white",
      borderRadius: "12px",
      padding: "12px 20px 12px 20px",
    },
    iconTheme: {
      primary: "red",
      secondary: "white",
    },
  },
};
