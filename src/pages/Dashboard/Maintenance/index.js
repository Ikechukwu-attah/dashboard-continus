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

const Maintenance = () => {
  const { getMaintenance, error, isLoading, data, totalPages } =
    useGetMaintenance();
  const [maintenanceData, setMaintenanceData] = useState([]);
  const { truckDropdownData, locationsDropdownData } = useContext(
    dropdownFilterContext
  );

  const {
    getCSVExport,
    csvData,
    isLoading: isLoadingDownload,
  } = useGetCSVExport();
  const [locationFilter, setLocationFilter] = useState();
  const [truckfilter, setTruckFilter] = useState();
  const [dateFilter, setDateFilter] = useState();
  const [pageFilter, setPageFilter] = useState();
  const [maintenanceFilter, setMaintenanceFilter] = useState([]);

  const [truckData, setTruckData] = useState([]);

  useFilter(
    truckfilter,
    dateFilter,
    locationFilter,
    maintenanceFilter,
    pageFilter,
    getMaintenance
  );

  const [dateRange, setDateRange] = useState([]);

  useEffect(() => {
    getMaintenance();
  }, []);

  useEffect(() => {
    if (data) {
      const maintenanceDropdownData = removeDuplicate(
        data,
        (allData) => allData.Maintenance
      );
      // const truckDropdownData = removeDuplicate(
      //   data,
      //   (allData) => allData.Truck
      // );
      if (!maintenanceData.length) {
        setMaintenanceData(maintenanceDropdownData);
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
                    entity: "maintenance_report",
                    query: {},
                    as: "download",
                  },
                };

                getCSVExport(data);
              }}
            >
              {isLoadingDownload ? "DownLoading" : "Download Report"}
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
                ? `data.Maintenance:=:${maintenance}`
                : "";
              setMaintenanceFilter(filter);
              // getMaintenance(filter);
            }}
            data={maintenanceData}
            minWidth="20rem"
            gap="20rem"
            icon={
              <KeyboardArrowDownIcon
                fontSize="large"
                style={{ color: "#606060" }}
              />
            }
            maxWidth="40rem"
          />

          <Dropdown
            // background={Theme.colors.secondaryColor}
            name="location"
            label="Location"
            onChange={(data) => {
              const { location } = data;
              const filter = location ? `data.City:=:${location}` : "";
              setLocationFilter(filter);
              console.log("location selection", data);
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
                `data.Due on:between:${formatDate(date[0])["yyyy-mm-dd"]}, ${
                  formatDate(date[1])["yyyy-mm-dd"]
                }`;
              setDateRange(date);
              setDateFilter(filter);

              console.log("this is filter", filter);
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
              const filter = truck ? `data.Truck:=:${truck}` : "";
              setTruckFilter(filter);
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
          />
        </StyledBox>
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default Maintenance;
