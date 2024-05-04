import { toast } from "react-toastify";

export const successToast: (message: string | any) => void = (
    message: string | any
  ) => {
    toast.success(message, {
      toastId: "success",
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };


export const errorToast: (message: any) => void = (message: string | any) => {
    toast.error(message, {
      toastId: "error",
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
