import React, { useState, useEffect, useMemo } from "react";
import { useTable, useFilters, useSortBy } from "react-table";
import { StyledTable } from "../../../../components/common/Basics/StyledTable";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { StyledBox } from "../../../../components/common/Basics/DivBox";
import { ColumnFilter } from "../../../../components/common/Basics/ColumnFilter";

const JournalTable = ({ data }) => {
  const [journalData, setJournalData] = useState([]);

  useEffect(() => {
    if (data) {
      console.log("Is this actually working ");
      console.table("data table", data);
      const newData = data.map((data) => {
        data.Date = data.data.Date;
        data.Truck = data.data.Truck;
        data["Truck chassis no"] = data.data["Truck chassis no."];
        data.Driver = data.data.Driver;
        data["Logged in"] = data.data["Logged in"];
        data["Logged out"] = data.data["Logged out"];
        data.Duration = data.data.Duration;

        return data;
      });

      console.log("newData", newData);

      setJournalData(newData);
    }
  }, [data]);

  const COLUMN = [
    // {
    //   Header: "Id",
    //   accessor: "id",
    //   Filter: ColumnFilter,
    //   disableFilters: true,
    // },
    { Header: "Date", accessor: "Date", Filter: ColumnFilter },
    {
      Header: "Truck ",
      accessor: "Truck",
      Filter: ColumnFilter,
    },
    {
      Header: "Truck chassis no",
      accessor: "Truck chassis no",
      Filter: ColumnFilter,
    },
    { Header: "Driver", accessor: "Driver", Filter: ColumnFilter },
    { Header: "Logged in", accessor: "Logged in", Filter: ColumnFilter },
    { Header: "Logged out", accessor: "Logged out", Filter: ColumnFilter },
    { Header: "Duration", accessor: "Duration", Filter: ColumnFilter },
  ];

  const columns = useMemo(() => COLUMN, []);
  const newJournalData = useMemo(() => journalData, [journalData, data]);

  console.log("new journalData", newJournalData);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        data: newJournalData,
        columns: columns,
      },

      useFilters,
      useSortBy
    );

  return (
    <StyledBox
      padding="1rem 8rem "
      // width="50rem"
      // overFlow="hidden"
      // background="blue"
      // marginTop="20rem"
    >
      {journalData && (
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

export default JournalTable;
