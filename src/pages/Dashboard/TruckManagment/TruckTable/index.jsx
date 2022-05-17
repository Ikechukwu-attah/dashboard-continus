import React, { useState, useEffect, useMemo } from "react";
import { useTable, useFilters, useSortBy } from "react-table";
import { StyledBox } from "../../../../components/common/Basics/DivBox";
import { StyledTextHeading } from "../../../../components/common/Basics/Heading";
import { StyledTable } from "../../../../components/common/Basics/StyledTable";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { ColumnFilter } from "../../../../components/common/Basics/ColumnFilter";

const TruckManagementTable = ({ data }) => {
  const [truckManagementData, setTruckManagementData] = useState([]);

  useEffect(() => {
    if (data) {
      const newData = data.map((data) => {
        data.Truck = data.data.Truck;
        data["Truck chassis no"] = data.data["Truck chassis no."];
        data["Truck type"] = data.data["Truck type"];
        data.City = data.data.City;
        data["Access control"] = data.data["Access control"];
        data["Assigned drivers"] = data.data["Assigned drivers"];
        data.Commissioning = data.data.Commissioning;
        data.Country = data.data.Country;
        data.Customer = data.data.Customer;
        data["Drive type"] = data.data["Drive type"];
        data["Load capacity"] = data.data["Load capacity"];
        data["Maintenance appointments"] =
          data.data["Maintenance appointments"];
        data["Next maintenance"] = data.data["Next maintenance"];
        data["Security-Code"] = data.data["Security-Code"];
        data.Series = data.data.Series;
        data["Shift models"] = data.data["Shift models"];
        data["Shock threshold"] = data.data["Shock threshold"];
        data.Speed = data.data.Speed;
        data.Synchronisation = data.data.Synchronisation;
        data.Technology = data.data.Technology;

        return data;
      });

      setTruckManagementData(newData);
    }
  }, [data]);

  const COLUMN = [
    // {
    //   Header: "Id",
    //   accessor: "id",
    //   Filter: ColumnFilter,
    //   disableFilters: true,
    // },
    // { Header: "Date", accessor: "Date", Filter: ColumnFilter },
    {
      Header: "Truck ",
      accessor: "Truck",
      Filter: ColumnFilter,
    },

    {
      Header: "Truck type ",
      accessor: "Truck type",
      Filter: ColumnFilter,
    },

    {
      Header: "Truck chassis no",
      accessor: "Truck chassis no",
      Filter: ColumnFilter,
    },
    { Header: "Location", accessor: "City", Filter: ColumnFilter },
    {
      Header: "Access control",
      accessor: "Access control",
      Filter: ColumnFilter,
    },
    {
      Header: "Assigned drivers",
      accessor: "Assigned drivers",
      Filter: ColumnFilter,
    },
    {
      Header: "Commissioning",
      accessor: "Commissioning",
      Filter: ColumnFilter,
    },
    { Header: "Country", accessor: "Country", Filter: ColumnFilter },
    { Header: "Customer", accessor: "Customer", Filter: ColumnFilter },
    { Header: "Drive type", accessor: "Drive type", Filter: ColumnFilter },
    {
      Header: "Load capacity",
      accessor: "Load capacity",
      Filter: ColumnFilter,
    },

    {
      Header: "Maintenance",
      accessor: "Maintenance appointments",
      Filter: ColumnFilter,
    },

    {
      Header: "Next maintenance",
      accessor: "Next maintenance",
      Filter: ColumnFilter,
    },

    {
      Header: "Security-Code",
      accessor: "Security-Code",
      Filter: ColumnFilter,
    },

    {
      Header: "Series",
      accessor: "Series",
      Filter: ColumnFilter,
    },

    {
      Header: "Shift models",
      accessor: "Shift models",
      Filter: ColumnFilter,
    },

    {
      Header: "Shock threshold",
      accessor: "Shock threshold",
      Filter: ColumnFilter,
    },

    {
      Header: "Speed",
      accessor: "Speed",
      Filter: ColumnFilter,
    },

    {
      Header: "Synchronisation",
      accessor: "Synchronisation",
      Filter: ColumnFilter,
    },

    {
      Header: "Technology",
      accessor: "Technology",
      Filter: ColumnFilter,
    },
  ];

  const columns = useMemo(() => COLUMN, []);
  const newJournalData = useMemo(
    () => truckManagementData,
    [truckManagementData, data]
  );

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
      style={{ maxWidth: "100%", overflowX: " auto " }}
    >
      {truckManagementData.length ? (
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

export default TruckManagementTable;
