import React from "react";
import { StyledBox } from "../../Basics/DivBox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const useMessages = () => {
  const notify = ({ errorMessage }) => {
    toast(errorMessage);
    console.log("notify", errorMessage);
  };

  return { ToastContainer, notify };
};

export default useMessages;
