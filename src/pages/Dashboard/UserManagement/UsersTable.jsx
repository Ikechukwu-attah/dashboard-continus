import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { StyledBox } from "../../../components/common/Basics/DivBox";
import axios from "../../../Authorization/Axios";
import { getAllAdminAPI } from "../../../Authorization/ServerPaths";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledButton } from "../../../components/common/Button/style";
import { Theme } from "../../../Theme";
import { useDeleteAdmin } from "../../AdminLogin/hooks/useAdminDelete";
import { useGetAdmin } from "../../AdminLogin/hooks/useGetAdmin";

const UsersTable = ({ data, getAllUsers }) => {
  // const [data, setData] = useState({});
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  const { error, deleteAdmin, isLoading } = useDeleteAdmin();

  const [columnDefs] = useState([
    // {
    //   field: "ID",
    //   checkboxSelection: true,
    //   cellRendererFramework: (row) => row.rowIndex + 1,
    //   width: 5,
    //   floatingFilter: false,
    //   maxWidth: 100,
    // },
    { field: "firstname", cellStyle: { fontSize: "2rem" } },
    { field: "lastname" },
    { field: "email" },
    { field: "phone" },

    {
      field: "Actions",
      floatingFilter: false,
      cellRendererFramework: (params) => (
        <StyledDivFlex
          gap="1rem"
          alignItems="center"
          justifyContent="center"
          // marginTop=".5rem"
        >
          {/* <StyledButton
            background={Theme.colors.primaryColor}
            color="white"
            padding="0.5rem"
            borderRadius="2.5px"
          >
            View
          </StyledButton> */}
          <Link to={`/user-management/${params.data.id}`}>
            <StyledButton
              background="#0275d8"
              color="white"
              padding="0rem 0.8rem 0.5rem 0.8rem"
              // marginTop="-1rem"
              fontWeight="400"
              fontSize="1.5rem"
              borderRadius="2.5px"
            >
              Edit
            </StyledButton>
          </Link>
          <StyledButton
            color="white"
            padding="0rem 0.8rem 0.5rem 0.8rem"
            // marginTop="-1rem"
            fontWeight="400"
            fontSize="1.5rem"
            borderRadius="2.5px"
            background="#d9534f"
            onClick={() => deleteAdmin({ id: params.data?.id }, getAllUsers)}
          >
            {console.log("params", params.data?.id)}
            Delete
          </StyledButton>
        </StyledDivFlex>
      ),
    },
  ]);

  const defaultColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
    flex: 1,
    rowSelection: "single",
    cellStyle: { fontSize: "2rem" },
  };

  const getRowStyle = (params) => {
    if (params.node.rowIndex % 2 === 0) {
      return { background: "#fff" };
    } else {
      return { background: "rgba(2, 115, 81, 0.3)" };
    }
  };

  console.log("all users data2", data);
  const onGridReady = (params) => {
    if (data) {
      console.log("all users data", data);
      const newData = data.map((data) => {
        data.firstname = data.data.firstname;
        data.lastname = data.data.lastname;
        data.phone = data.data.phone;
        return data;
      });

      params.api.applyTransaction({
        add: newData.reverse(),
      });
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

export default UsersTable;
