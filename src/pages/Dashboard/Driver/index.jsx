import React, { useEffect, useState, useContext } from "react";
import { StyledDashboardContentWrapper } from "../../../components/common/Basics/DashboardContentWrapper";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledPageHeaderButton } from "../../../components/common/Basics/PageHeaderButton";
import Dropdown from "../../../components/common/Dropdown";
import PageHeadingButtons from "../../../components/common/PageButton";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";
import { locations, trucks } from "../../../DUMMYDATA";
import { Theme } from "../../../Theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SubHeaderLayout from "../../../components/Layouts/SubHeaderLayout";
import { StyledBox } from "../../../components/common/Basics/DivBox";
import { useGetDriver } from "./hooks/useGetDriver";
import DriversTable from "./DriversTable";
import Paginations from "../../../components/common/Paginations";
import { removeDuplicate } from "../../../components/common/RemoveDuplicate";
import { dropdownFilterContext } from "../../../Context/DropdownFiltersContext";
import PickDate from "../../../components/common/DatePicker";
import { formatDate } from "../../../utils/FormatDate";
import SpinnerWithText from "../../../components/common/SpinnerWithText";
import { useFilter } from "../../../hooks/useFilter";
import { useGetCSVExport } from "../../../hooks/useGetCSVExport";
import MapTokenToUser from "../../../Authorization/MapTokenToUser";
import { useFilterGraph } from "../../../hooks/useGraphFilter";
import { getPreviousDate, getTodayDate } from "../../../utils/GetDate";

const Driver = () => {
  const { data, isLoading, error, getDriver, totalPages } = useGetDriver();
  const [activePage, setActivePage] = useState(0);

  const startDate = getPreviousDate(120);
  const endDate = getTodayDate();
  const [truckDownload, setTruckDownload] = useState();
  const [locationDownload, setLocationDownload] = useState();

  const filter = `period[start]=${startDate}&period[end]=${endDate}`;
  const [dateRange, setDateRange] = useState([startDate, endDate]);
  const [pageFilter, setPageFilter] = useState();
  const [locationFilter, setLocationFilter] = useState();
  const [truckfilter, setTruckFilter] = useState();
  const [dateFilter, setDateFilter] = useState(filter);
  // CREATING FILTER STATE

  const resetPagination = () => {
    const pageFilter = `page=1`;
    setPageFilter(pageFilter);
    setActivePage(0);
  };
  const { getCSVExport, csvData, isExporting, isDownloading } =
    useGetCSVExport();

  const { truckDropdownData, locationsDropdownData } = useContext(
    dropdownFilterContext
  );


  // useFilter(truckfilter, null, locationFilter, null, pageFilter, getDriver);
  useFilterGraph(
   { truckfilter,
    locationFilter,
    pageFilter,
    getData:getDriver}
  );

  // useEffect(() => {
  //   const refineFilter = (filter) => {
  //     if (filter && filter[7] === "|") {
  //       console.log("filter array", `${filter.slice(0, 7)}${filter.slice(8)}`);
  //       return `${filter.slice(0, 7)}${filter.slice(8)}`;
  //     }
  //     return filter;
  //   };

  //   const allFilter = `?where=${truckfilter ? `|${truckfilter}` : ""}${
  //     dateFilter ? `|${dateFilter}` : ""
  //   }${locationFilter ? `|${locationFilter}` : ""}`;

  //   const filter = allFilter === "?where=" ? null : allFilter;

  //   console.log("all filter =>>>", refineFilter(filter));

  //   getDriver(refineFilter(filter));
  // }, [truckfilter, dateFilter, locationFilter]);

  useEffect(() => {
    getDriver();
  }, []);

  return (
    <DashboardLayout>
      <StyledDashboardContentWrapper>
        <PageHeaderLayout>
          <StyledDivFlex gap="1rem" flexDirectionSd="column" widthSd="100%" paddingS="2rem">
            <StyledPageHeaderButton
              fontSizeSd="1.2rem"
              onClick={() => {
                const user = MapTokenToUser();
                const data = {
                  export: {
                    entity: "driver_management",
                    query: { truck: truckDownload, location: locationDownload },
                    as: "email",
                    recipients: [user.user.email],
                  },
                };

                getCSVExport(data);
              }}
            >
              {isExporting ? "Sending......" : " Report Via Email"}
            </StyledPageHeaderButton>
            <StyledPageHeaderButton
              fontSizeSd="1.2rem"
              onClick={() => {
                const data = {
                  export: {
                    entity: "driver_management",
                    query: { truck: truckDownload, location: locationDownload },
                    as: "download",
                  },
                };

                getCSVExport(data);
              }}
            >
              {isDownloading ? "Downloading" : "Download Report"}
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
          paddingM="1rem 0"
          gapM="1.5rem"
          justifyContentM="center"
          flexDirectionS="column"
        >
          <Dropdown
            // background={Theme.colors.secondaryColor}

            name="location"
            label="Location"
            onChange={(data) => {
              const { location } = data;
              const filter = location ? `location=${location}` : null;
              resetPagination();
              setLocationFilter(filter);
              setLocationDownload(location);
            }}
            data={locationsDropdownData}
            gap="2rem"
            minWidth="22rem"
            widthS="90%"
            icon={
              <KeyboardArrowDownIcon
                fontSize="large"
                style={{ color: "#606060" }}
              />
            }
            multiSelect={true}
          />

          {/* <PickDate
            onChange={(date) => {
              const filter =
                date &&
                `data.Created on:between:${
                  formatDate(date[0])["yyyy-mm-dd"]
                }, ${formatDate(date[1])["yyyy-mm-dd"]}`;
              setDateRange(date);
              setDateFilter(filter);
            }}
          /> */}

          <Dropdown
            // background={Theme.colors.secondaryColor}
            name="truck"
            label="Truck"
            onChange={(data) => {
              const { truck } = data;
              const filter = truck ? `truck=${truck}` : "";
              setTruckFilter(filter);
              resetPagination();
              setTruckDownload(truck);
            }}
            minWidth="20rem"
            data={truckDropdownData}
            gap="2rem"
            widthS="90%"
            icon={
              <KeyboardArrowDownIcon
                fontSize="large"
                style={{ color: "#606060" }}
              />
            }
            multiSelect={true}
          />
        </StyledDivFlex>
        <StyledBox background={Theme.colors.neutralColor}>
          {/* <SpinningLoader /> */}
          <SubHeaderLayout
            text="Driver  Managment:"
            // dateRange={dateRange}
            count={data?.length}
            // data={data}
          />
        </StyledBox>

        <StyledBox>
          {isLoading ? (
            <SpinnerWithText isLoading={isLoading} margin="1rem 0 0 0" />
          ) : (
            <>
              <DriversTable data={data} />
            </>
          )}

          <Paginations
            getData={getDriver}
            totalPages={totalPages}
            isLoading={isLoading}
            data={data}
            onPageSelected={setPageFilter}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </StyledBox>
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default Driver;
