import React from "react";
import "./style.css";

const BackDrop = ({ onClose }) => {
  return <div className="back-drop" onClick={() => onClose(false)} />;
};

export default BackDrop;
