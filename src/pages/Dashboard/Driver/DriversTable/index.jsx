import React, { useState, useEffect, useMemo } from "react";
import { useTable, useFilters, useSortBy } from "react-table";
import { StyledTable } from "../../../../components/common/Basics/StyledTable";
import { StyledBox } from "../../../../components/common/Basics/DivBox";
import { ColumnFilter } from "../../../../components/common/Basics/ColumnFilter";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { StyledTextHeading } from "../../../../components/common/Basics/Heading";

const DriversTable = ({ data }) => {
  const [driverData, setDriverData] = useState([]);

  useEffect(() => {
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

      console.log("newData driver", newData);

      setDriverData(newData);
    }
  }, [data]);

  const COLUMN = [
    // {
    //   Header: "Id",
    //   accessor: "id",
    //   Filter: ColumnFilter,
    //   disableFilters: true,
    // },
    { Header: "First Name", accessor: "First name", Filter: ColumnFilter },
    {
      Header: "Last Name",
      accessor: "Last name",
      Filter: ColumnFilter,
    },
    { Header: "RFID Key", accessor: "RFID", Filter: ColumnFilter },
    { Header: "RFID Status", accessor: "RFID status", Filter: ColumnFilter },
    { Header: "Role", accessor: "Role", Filter: ColumnFilter },
    { Header: "Assigned Trucks", accessor: "Trucks", Filter: ColumnFilter },
  ];

  const columns = useMemo(() => COLUMN, []);
  const newDriverData = useMemo(() => driverData, [driverData, data]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        data: newDriverData,
        columns: columns,
      },

      useFilters,
      useSortBy
    );

  return (
    <StyledBox padding="1rem 8rem">
      {driverData?.length ? (
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
    </StyledBox>
  );
};

export default DriversTable;
