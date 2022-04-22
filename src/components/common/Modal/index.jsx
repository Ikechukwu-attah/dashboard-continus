import { padding } from "@mui/system";
import React from "react";

const TableModal = ({ setShow, idValue, callback }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "10",
        position: "fixed",
        top: "20vh",
        right: "-60rem",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid gray",
          // padding: "4rem 2rem",
          width: "30%",
          borderRadius: "1rem",
        }}
      >
        <h4
          style={{
            textAlign: "center",
            color: "#027351",
            padding: "1rem",
            fontSize: "1.3rem",
          }}
        >
          Do you really want to delete these user? <br /> This process cannot be
          undone
        </h4>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            padding: "2rem",
          }}
        >
          <button
            style={{
              backgroundColor: "#027351",
              color: "white",
              padding: "0.5rem",
              borderRadius: "2px",
              fontSize: "1.5rem",
            }}
            onClick={() => setShow(false)}
          >
            Cancel
          </button>
          <button
            style={{
              backgroundColor: "rgba(255, 29, 29, 0.5)",
              color: "white",
              padding: "0.5rem",
              borderRadius: "2px",
              fontSize: "1.5rem",
            }}
            onClick={callback}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableModal;
