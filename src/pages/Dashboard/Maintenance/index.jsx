import React, { useContext, useEffect, useState } from "react";
import { StyledDashboardContentWrapper } from "../../../components/common/Basics/DashboardContentWrapper";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledPageHeaderButton } from "../../../components/common/Basics/PageHeaderButton";
import Dropdown from "../../../components/common/Dropdown";
import PageHeadingButtons from "../../../components/common/PageButton";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";
import { locations, maintenance, period, trucks } from "../../../DUMMYDATA";
import { Theme } from "../../../Theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { StyledBox } from "../../../components/common/Basics/DivBox";
import SubHeaderLayout from "../../../components/Layouts/SubHeaderLayout";
import { useGetMaintenance } from "./hooks/useGetMaintenance";
import MaintenanceTable from "./MaintenanceTable";
import DateRangePicker from "../../../components/common/DatePicker";
import PickDate from "../../../components/common/DatePicker";
import { removeDuplicate } from "../../../components/common/RemoveDuplicate";
import Paginations from "../../../components/common/Paginations";
import SpinnerWithText from "../../../components/common/SpinnerWithText";
import { Check } from "@mui/icons-material";
import { dropdownFilterContext } from "../../../Context/DropdownFiltersContext";
import { formatDate } from "../../../utils/FormatDate";
import { useFilter } from "../../../hooks/useFilter";
import { useGetCSVExport } from "../../../hooks/useGetCSVExport";
import MapTokenToUser from "../../../Authorization/MapTokenToUser";
import { getPreviousDate, getTodayDate } from "../../../utils/GetDate";
import { useFilterGraph } from "../../../hooks/useGraphFilter";
import { maintenanceList } from "../../../DUMMYDATA";

const Maintenance = () => {
  const { getMaintenance, error, isLoading, data, totalPages } =
    useGetMaintenance();
  const [cycleData, setCycleData] = useState([]);
  const { truckDropdownData, locationsDropdownData } = useContext(
    dropdownFilterContext
  );
  const [activePage, setActivePage] = useState(0);

  const resetPagination = () => {
    const pageFilter = `page=1`;
    setPageFilter(pageFilter);
    setActivePage(0);
  };

  const [startDate, setStartDate] = useState(getPreviousDate(120));
  const [endDate, setEndDate] = useState(getTodayDate());
  const [truckDownload, setTruckDownload] = useState();
  const [locationDownload, setLocationDownload] = useState();

  const filter = `period[start]=${startDate}&period[end]=${endDate}`;

  const { getCSVExport, csvData, isDownloading, isExporting } =
    useGetCSVExport();
  const [locationFilter, setLocationFilter] = useState();
  const [truckfilter, setTruckFilter] = useState();
  const [dateFilter, setDateFilter] = useState(filter);
  const [pageFilter, setPageFilter] = useState();
  const [maintenanceFilter, setMaintenanceFilter] = useState([]);
  const [dateRange, setDateRange] = useState([startDate, endDate]);

  // const [truckData, setTruckData] = useState([]);

  // useFilter(
  //   truckfilter,
  //   dateFilter,
  //   locationFilter,
  //   pageFilter,
  //   maintenanceFilter,
  //   getMaintenance,
  //   null
  // );

  useFilterGraph(
    truckfilter,
    locationFilter,
    dateFilter,
    pageFilter,
    maintenanceFilter,
    getMaintenance
  );

  // useEffect(() => {
  //   getMaintenance();
  // }, []);

  useEffect(() => {
    if (data) {
      const cycleDropdownData = removeDuplicate(
        data,
        (allData) => allData.Cycle
      );
      // const truckDropdownData = removeDuplicate(
      //   data,
      //   (allData) => allData.Truck
      // );
      if (!cycleData.length) {
        setCycleData(cycleDropdownData);
        // setTruckData(truckDropdownData);
      }
    }
  }, [data]);

  // useEffect(() => {
  //   const selectedFiltered = `where=data.Truck:=:${selectedTruckFilter.truck},
  //   data.Maintenance:=:${selectedMaintenanceFilter.maintenance}`;
  //   //?where=data.Truck:=:truck&&where=data.Maintenance:=:mainte
  //   // const truckFilter = `?where=data.Truck:=:${selectedTruckFilter.truck}`;
  //   // const maintenanceFilter = `?where=data.Maintenance:=:${selectedMaintenanceFilter.maintenence}`;
  //   getMaintenance(selectedFiltered);
  // }, [selectedMaintenanceFilter, selectedTruckFilter]);

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
                    entity: "maintenance_report",
                    query: {
                      period: {
                        start: startDate,
                        end: endDate,
                      },
                      truck: truckDownload,
                      location: locationDownload,
                    },
                    as: "email",
                    recipients: [user.user.email],
                  },
                };

                getCSVExport(data);
              }}
            >
              {isExporting ? "Sending..." : " Report Via Email"}
            </StyledPageHeaderButton>
            <StyledPageHeaderButton
              onClick={() => {
                const data = {
                  export: {
                    entity: "maintenance_report",
                    query: {
                      period: {
                        start: startDate,
                        end: endDate,
                      },
                      truck: truckDownload,
                      location: locationDownload,
                    },
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
        >
          <Dropdown
            // background={Theme.colors.secondaryColor}
            name="maintenance"
            label="Maintenance"
            onChange={(data) => {
              console.log("selection", data);
              const { maintenance } = data;
              const filter = maintenance
                ? `where=data.Maintenance:=:${maintenance}`
                : "";
              setMaintenanceFilter(filter);
              // getMaintenance(filter);

              resetPagination();
            }}
            data={maintenanceList}
            minWidth="20rem"
            minWidthT="30rem"
            gap="20rem"
            icon={
              <KeyboardArrowDownIcon
                fontSize="large"
                style={{ color: "#606060" }}
              />
            }
            maxWidth="40rem"
            // multiSelect={true}
          />

          <Dropdown
            // background={Theme.colors.secondaryColor}
            name="location"
            label="Location"
            onChange={(data) => {
              const { location } = data;
              const filter = location ? `location=${location}` : "";
              setLocationFilter(filter);
              resetPagination();
              setLocationDownload(location);
              // console.log("location selection", data);
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
            multiSelect={true}
          />
          {/* <Dropdown
            // background={Theme.colors.secondaryColor}
            name="period"
            label="Time Period"
            onChange={(data) => console.log("user selection", data)}
            data={period}
            gap="2rem"
            icon={
              <KeyboardArrowDownIcon
                fontSize="large"
                style={{ color: "#606060" }}
              />
            }
          /> */}
          <PickDate
            onChange={(date) => {
              const filter =
                date &&
                `period[start]=${
                  formatDate(date[0])["yyyy-mm-dd"]
                }&period[end]=${formatDate(date[1])["yyyy-mm-dd"]} 
           `;
              setDateFilter(filter);
              setDateRange(date);
              resetPagination();
              setStartDate(formatDate(date[0])["yyyy-mm-dd"]);
              setEndDate(formatDate(date[1])["yyyy-mm-dd"]);
            }}
          />

          <Dropdown
            // background={Theme.colors.secondaryColor}
            name="truck"
            label="Filter Truck"
            onChange={(data) => {
              console.log("truck selection", data);
              // setSelectedTruckFilter(data);
              const { truck } = data;
              const filter = truck ? `truck=${truck}` : "";
              setTruckFilter(filter);
              resetPagination();
              setTruckDownload(truck);
            }}
            data={truckDropdownData}
            gap="2rem"
            minWidth="20rem"
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
            text="Maintenance for the period:"
            dateRange={dateRange}
            count={data?.length}
            // 1 Feb, 2022 - 28th Feb, 2022
          />
        </StyledBox>

        <StyledBox>
          {isLoading ? (
            <SpinnerWithText isLoading={isLoading} margin="1rem 0 0 0 " />
          ) : (
            <MaintenanceTable data={data} />
          )}

          <Paginations
            getData={getMaintenance}
            totalPages={totalPages}
            data={data}
            isLoading={isLoading}
            onPageSelected={setPageFilter}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </StyledBox>
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default Maintenance;
