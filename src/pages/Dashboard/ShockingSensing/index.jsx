import React, { useState, useEffect, useContext } from "react";

import { StyledDashboardContentWrapper } from "../../../components/common/Basics/DashboardContentWrapper";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledPageHeaderButton } from "../../../components/common/Basics/PageHeaderButton";
import Dropdown from "../../../components/common/Dropdown";

import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";
import { locations, period, trucks } from "../../../DUMMYDATA";
import { Theme } from "../../../Theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SubHeaderLayout from "../../../components/Layouts/SubHeaderLayout";
import { StyledBox } from "../../../components/common/Basics/DivBox";
import { StyledButton } from "../../../components/common/Button/style";
import { dummyShockingData } from "../../../DUMMYDATACHART.js";
import ShockSensingTable from "./ShockSensingTable";
import { useGetShockingSensingTable } from "./hooks/useGetShockSensingTable";
import Paginations from "../../../components/common/Paginations";
import { useGetShockingSensingBarChart } from "./hooks/useGetShockingSensingBarChart";
import ShockSensingBar from "./ShockSensingBar";
import { dropdownFilterContext } from "../../../Context/DropdownFiltersContext";
import SpinnerWithText from "../../../components/common/SpinnerWithText";
import { formatDate } from "../../../utils/FormatDate";
import PickDate from "../../../components/common/DatePicker";
import { useFilter } from "../../../hooks/useFilter";
import { useGetCSVExport } from "../../../hooks/useGetCSVExport";
import MapTokenToUser from "../../../Authorization/MapTokenToUser";
import { useFilterGraph } from "../../../hooks/useGraphFilter";
import { getPreviousDate, getTodayDate } from "../../../utils/GetDate";

const ShockingSense = () => {
  const [activeButton, setActiveButton] = useState("Table");
  const buttons = ["Table", "Graph"];
  const { getShockingSensingTable, totalPages, isLoading, error, data } =
    useGetShockingSensingTable();
  const { getShockingSensingBarChart, graphdata } =
    useGetShockingSensingBarChart();
  const { truckDropdownData, locationsDropdownData } = useContext(
    dropdownFilterContext
  );
  const {
    getCSVExport,
    csvData,
    isLoading: isLoadingDownload,
  } = useGetCSVExport();

  const [activePage, setActivePage] = useState(0);

  const resetPagination = () => {
    const pageFilter = `page=1`;
    setPageFilter(pageFilter);
    setActivePage(0);
  };

  const startDate = getPreviousDate(120);
  const endDate = getTodayDate();

  const filter = `period[start]=${startDate}&period[end]=${endDate}`;

  console.log("shocking sense", filter);

  const [dateRange, setDateRange] = useState([startDate, endDate]);
  const [locationFilter, setLocationFilter] = useState();
  const [truckfilter, setTruckFilter] = useState();
  const [dateFilter, setDateFilter] = useState(filter);
  const [pageFilter, setPageFilter] = useState();

  console.log("table Data on filter", data);

  useFilterGraph(
    truckfilter,
    locationFilter,
    dateFilter,
    pageFilter,
    null,
    getShockingSensingTable
  );

  console.log("checking shocking graph data", graphdata);

  // useEffect(() => {
  //   getShockingSensingTable();
  // }, []);

  useEffect(() => {
    getShockingSensingBarChart();
  }, []);

  return (
    <DashboardLayout>
      <StyledDashboardContentWrapper>
        <PageHeaderLayout>
          <StyledDivFlex gap="1rem">
            <StyledPageHeaderButton
              onClick={() => {
                const user = MapTokenToUser();
                console.log("user export", user.user.email);
                const data = {
                  export: {
                    entity: "shock_sensing",
                    query: {},
                    as: "email",
                    recipients: [user.user.email],
                  },
                };

                getCSVExport(data);
              }}
            >
              Report Via Email
            </StyledPageHeaderButton>
            <StyledPageHeaderButton
              onClick={() => {
                const data = {
                  export: {
                    entity: "shock_sensing",
                    query: {},
                    as: "download",
                  },
                };

                getCSVExport(data);
              }}
            >
              {isLoadingDownload ? "DownLoading..." : "Download Report"}
            </StyledPageHeaderButton>
          </StyledDivFlex>
        </PageHeaderLayout>

        <StyledDivFlex
          // background={Theme.colors.neutralColor}
          padding="1rem 8rem"
          // marginTop="2rem"
          justifyContent="flex-end"
          gap="4rem"
          alignItems="center"
        >
          <Dropdown
            // background={Theme.colors.secondaryColor}
            name="location"
            label="Location"
            onChange={(data) => {
              console.log("user selection", data);
              const { location } = data;
              const filter = location ? `location=${location}` : "";
              setLocationFilter(filter);
              resetPagination();

              // getShockingSensingTable(filter);
              console.log("filter", filter);
            }}
            data={locationsDropdownData}
            gap="2rem"
            minWidth="20rem"
            icon={
              <KeyboardArrowDownIcon
                fontSize="large"
                style={{ color: "#606060" }}
              />
            }
          />
          <PickDate
            onChange={(date) => {
              const filter =
                date &&
                `?period[start]=${
                  formatDate(date[0])["yyyy-mm-dd"]
                }&period[end]=${formatDate(date[1])["yyyy-mm-dd"]} 
           `;
              setDateFilter(filter);
              setDateRange(date);
              resetPagination();
            }}
          />

          <Dropdown
            // background={Theme.colors.secondaryColor}
            name="truck"
            label="Filter Truck"
            onChange={(data) => {
              const { truck } = data;
              const filter = truck ? `truck=${truck}` : "";
              // getShockingSensingTable(filter);
              setTruckFilter(filter);
              resetPagination();
            }}
            minWidth="20rem"
            data={truckDropdownData}
            gap="2rem"
            icon={
              <KeyboardArrowDownIcon
                fontSize="large"
                style={{ color: "#606060" }}
              />
            }
          />
        </StyledDivFlex>
        <StyledBox background={Theme.colors.neutralColor}>
          {/* <SpinningLoader /> */}
          <SubHeaderLayout
            text="Shock Sensing for the period:"
            dateRange={dateRange}
            count={data?.length}
            data={data}
            buttons={
              <StyledDivFlex gap="2rem">
                {buttons.map((text) => (
                  <StyledButton
                    borderRadius="3rem"
                    fontSize="1.8rem"
                    background={
                      text === activeButton
                        ? Theme.colors.primaryColor
                        : Theme.colors.neutralColor
                    }
                    color={
                      text === activeButton
                        ? Theme.colors.neutralColor
                        : Theme.colors.primaryColor
                    }
                    border={
                      text === activeButton
                        ? "none"
                        : `1px solid ${Theme.colors.primaryColor}`
                    }
                    fontWeight="500"
                    padding="1rem 3rem"
                    // color={Theme.colors.neutralColor}
                    onClick={() => setActiveButton(text)}
                  >
                    {text}
                  </StyledButton>
                ))}
              </StyledDivFlex>
            }
          />

          {activeButton === "Table" ? (
            <>
              {isLoading ? (
                <SpinnerWithText isLoading={isLoading} margin="1rem 0 0 0" />
              ) : (
                <ShockSensingTable data={data} />
              )}

              {data?.length >= 1 && (
                <Paginations
                  getData={getShockingSensingTable}
                  totalPages={totalPages}
                  isLoading={isLoading}
                  data={data}
                  onPageSelected={setPageFilter}
                  activePage={activePage}
                  setActivePage={setActivePage}
                />
              )}
            </>
          ) : (
            <ShockSensingBar data={graphdata} />
          )}

          {/* BARCHART STARTS FROM HERE  */}

          {/* BARCHART ENDS HERE */}
        </StyledBox>
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default ShockingSense;
