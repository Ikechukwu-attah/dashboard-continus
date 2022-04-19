import React, { useEffect, useState, useMemo } from "react";
import { useTable, useFilters, useSortBy } from "react-table";
import { StyledTable } from "../../../../components/common/Basics/StyledTable";

// import { ColumnFilter } from "./ColumnFilter";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { ColumnFilter } from "../../../../components/common/Basics/ColumnFilter";
import { StyledBox } from "../../../../components/common/Basics/DivBox";

const MaintenanceTable = ({ data }) => {
  console.log("is loading", data);

  const [maintenanceData, setMaintenanceData] = useState([]);
  console.log("maintenance", maintenanceData);

  useEffect(() => {
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

      console.log("newData", newData);

      setMaintenanceData(newData);
    }
  }, [data]);

  const COLUMN = [
    // {
    //   Header: "Id",
    //   accessor: "id",
    //   Filter: ColumnFilter,
    //   disableFilters: true,
    // },
    { Header: "Truck", accessor: "Truck", Filter: ColumnFilter },
    {
      Header: "Truck chassis no",
      accessor: "Truck chassis no",
      Filter: ColumnFilter,
    },
    { Header: "Drive type", accessor: "Drive type", Filter: ColumnFilter },
    { Header: "Technology", accessor: "Technology", Filter: ColumnFilter },
    { Header: "Maintenance", accessor: "Maintenance", Filter: ColumnFilter },
  ];

  const columns = useMemo(() => COLUMN, []);
  const newMaintenanceData = useMemo(
    () => maintenanceData,
    [maintenanceData, data]
  );
  console.log("new maintenanceData", newMaintenanceData);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        data: newMaintenanceData,
        columns: columns,
      },

      useFilters,
      useSortBy
    );

  return (
    <StyledBox style={{ width: "100%" }} padding="1rem 8rem">
      {maintenanceData && (
        <StyledTable {...getTableProps()} width="100% !important">
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
      )}
    </StyledBox>
  );
};

export default MaintenanceTable;
