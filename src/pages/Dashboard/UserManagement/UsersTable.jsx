import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { StyledBox } from "../../../components/common/Basics/DivBox";
import { useTable, useFilters, useSortBy } from "react-table";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import axios from "../../../Authorization/Axios";
import { getAllAdminAPI } from "../../../Authorization/ServerPaths";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledButton } from "../../../components/common/Button/style";
import { Theme } from "../../../Theme";
import { useDeleteAdmin } from "../../AdminLogin/hooks/useAdminDelete";
import { useGetAdmin } from "../../AdminLogin/hooks/useGetAdmin";
import { ColumnFilter } from "../../../components/common/Basics/ColumnFilter";
import { StyledTable } from "../../../components/common/Basics/StyledTable";
import TableModal from "../../../components/common/Modal";
import BackDrop from "../../../components/common/Backdrop/BackDrop";
import Paginations from "../../../components/common/Paginations";
import { useDeleteClient } from "../../Login/hooks/useClientDelete";
import { getUserFilter } from "../../../constants";
import { StyledTextHeading } from "../../../components/common/Basics/Heading";

const UsersTable = ({ data, getAllUsers }) => {
  const [userData, setUserData] = useState([]);
  const [show, setShow] = useState(false);
  const [idValue, setIdValue] = useState();

  console.log("userData", userData);
  const { error, deleteClient, isLoading } = useDeleteClient();
  console.log("Is this actually working users table ");
  useEffect(() => {
    console.log("personnel data", data);
    if (data) {
      console.log("Is this actually working users table ");
      console.table("data table", data);
      const newData = data.map((data) => {
        data.firstname = data.data.firstname;
        data.lastname = data.data.lastname;
        data.phone = data.data.phone;
        data.role = data.data.role;

        return data;
      });

      console.log("admin", newData);

      setUserData(newData);
    }
  }, [data]);

  const handleDelete = () => {
    deleteClient({ id: Number(idValue) }, () => getAllUsers(getUserFilter));
    setShow(false);
  };

  const COLUMN = [
    {
      Header: "Id",
      accessor: "id",
      Filter: ColumnFilter,
      disableFilters: true,
    },
    { Header: "First Name", accessor: "firstname", Filter: ColumnFilter },
    { Header: "last Name", accessor: "lastname", Filter: ColumnFilter },
    { Header: "Email", accessor: "email", Filter: ColumnFilter },
    { Header: "Phone Number", accessor: "phone", Filter: ColumnFilter },
    { Header: "Role", accessor: "role", Filter: ColumnFilter },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ row }) => (
        <StyledDivFlex gap="1rem">
          <Link to={`/user-management/admin/${row.values.id}`}>
            <StyledButton
              fontWeight="400"
              fontSize="1.5rem"
              borderRadius="2.5px"
              background="#0275d8"
              color="#fff"
              padding="0.5rem"
            >
              Edit
            </StyledButton>
          </Link>

          <StyledButton
            onClick={() => {
              setShow(true);
              setIdValue(row.values.id);
              console.log("rowsssss", row.values.id);
            }}
            fontWeight="400"
            fontSize="1.5rem"
            borderRadius="2.5px"
            background="#d9534f"
            color="#fff"
            padding="0.5rem"
          >
            Delete
          </StyledButton>
        </StyledDivFlex>
      ),
      Filter: ColumnFilter,
      disableFilters: true,
    },
  ];

  const columns = useMemo(() => COLUMN, []);
  const newUserData = useMemo(() => userData, [userData, data]);
  const initialState = { hiddenColumns: ["id"] };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        data: newUserData,
        columns: columns,
        initialState,
      },

      useFilters,
      useSortBy
    );

  return (
    <StyledBox
      // style={{ maxWidth: "100%", overflowX: " auto " }}
      padding="1rem 8rem"
    >
      {data ? (
        <StyledTable {...getTableProps()} width="100%">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <ArrowDropDownIcon fontSize="large" />
                        ) : (
                          <ArrowDropUpIcon fontSize="large" />
                        )
                      ) : (
                        ""
                      )}
                    </span>
                    <div className="input-filter">
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              console.log("row", row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </StyledTable>
      ) : (
        <StyledTextHeading
          color="grey"
          textAlign="center"
          fontSize="2rem"
          paddingTop="1rem"
        >
          No Result found
        </StyledTextHeading>
      )}

      {show && (
        <TableModal
          setShow={setShow}
          idValue={idValue}
          callback={handleDelete}
        />
      )}
      {show && <BackDrop onClose={setShow} />}
    </StyledBox>
  );
};

export default UsersTable;
