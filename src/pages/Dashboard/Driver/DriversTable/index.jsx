import React, { useState } from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { StyledBox } from "../../../../components/common/Basics/DivBox";

const DriversTable = ({ data }) => {
  const [columnDefs] = useState([
    { field: "First name", headerName: "First Name" },
    { field: "Last name", headerName: "Last Name" },
    { field: "RFID", headerName: "RFID Key" },
    {
      field: "RFID status",
      headerName: "RFID Status",
      suppressSizeToFit: true,
      maxWidth: 150,
    },
    { field: "Role", headerName: "Role", maxWidth: 150 },
    { field: "Trucks", headerName: "Assigned Trucks" },
  ]);

  const defaultColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
    flex: 1,
    cellStyle: { fontSize: "2rem" },
  };

  const onGridReady = (params) => {
    if (data) {
      console.log("Is this actually working ");
      console.table("data table", data);
      const newData = data.map((data) => {
        data["First name"] = data.data["First name"];
        data["Last name"] = data.data["Last name"];
        data.RFID = data.data.RFID;
        data["RFID status"] = data.data["RFID status"];
        data.Role = data.data.Role;
        data.Trucks = data.data.Trucks;

        return data;
      });

      console.log("new data", newData);

      params.api.applyTransaction({
        add: data.reverse(),
      });
    }
  };

  const getRowStyle = (params) => {
    if (params.node.rowIndex % 2 === 0) {
      return { background: "#fff" };
    } else {
      return { background: "rgba(2, 115, 81, 0.3)" };
    }
  };
  return (
    <StyledBox
      className="ag-theme-alpine"
      style={{ height: "80vh", width: "100%" }}
      padding="1rem 8rem"
    >
      {data && (
        <AgGridReact
          // rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          pagination={true}
          paginationPageSize={10}
          getRowStyle={getRowStyle}
        ></AgGridReact>
      )}
    </StyledBox>
  );
};

export default DriversTable;
