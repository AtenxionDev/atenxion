import toast from "react-hot-toast";

export const showToast = (message: string, type: "success" | "error") => {
  toast.dismiss();
  if (type === "success") {
    toast.success(message);
  } else if (type === "error") {
    toast.error(message);
  } else {
    toast(message);
  }
};
