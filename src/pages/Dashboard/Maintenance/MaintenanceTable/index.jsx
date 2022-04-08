import React, { useState } from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { StyledBox } from "../../../../components/common/Basics/DivBox";

const MaintenanceTable = ({ data }) => {
  const [columnDefs] = useState([
    { field: "Truck", headerName: "Truck" },
    { field: "Truck chassis no", headerName: "Truck chassis no" },
    { field: "Drive type", headerName: "Drive Type" },
    { field: "Technology", headerName: "Technology" },
    { field: "Maintenance", headerName: "Maintenance" },
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
        data.Truck = data.data.Truck;
        data["Truck chassis no"] = data.data["Truck chassis no."];
        data["Drive type"] = data.data["Drive type"];
        data.Technology = data.data.Technology;
        data.Maintenance = data.data.Maintenance;

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

export default MaintenanceTable;
