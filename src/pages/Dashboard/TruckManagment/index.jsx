import React, { useContext, useState } from "react";
import MapTokenToUser from "../../../Authorization/MapTokenToUser";
import { StyledDashboardContentWrapper } from "../../../components/common/Basics/DashboardContentWrapper";
import { StyledBox } from "../../../components/common/Basics/DivBox";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledPageHeaderButton } from "../../../components/common/Basics/PageHeaderButton";
import PickDate from "../../../components/common/DatePicker";
import Dropdown from "../../../components/common/Dropdown";
import Paginations from "../../../components/common/Paginations";
import SpinnerWithText from "../../../components/common/SpinnerWithText";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";
import SubHeaderLayout from "../../../components/Layouts/SubHeaderLayout";
import { dropdownFilterContext } from "../../../Context/DropdownFiltersContext";
import { useGetCSVExport } from "../../../hooks/useGetCSVExport";
import { useFilterGraph } from "../../../hooks/useGraphFilter";
import { Theme } from "../../../Theme";
import { formatDate } from "../../../utils/FormatDate";
import { getPreviousDate, getTodayDate } from "../../../utils/GetDate";
import { useGetTruckManagement } from "./hooks/useGetTruckManagement";
import TruckManagementTable from "./TruckTable";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const TruckManagment = () => {
  const { truckDropdownData, locationsDropdownData } = useContext(
    dropdownFilterContext
  );

  const [activePage, setActivePage] = useState(0);

  const resetPagination = () => {
    const pageFilter = `page=1`;
    setPageFilter(pageFilter);
    setActivePage(0);
  };

  const { data, isLoading, getTruckManagement, error, totalPages } =
    useGetTruckManagement();

  const startDate = getPreviousDate(31);
  const endDate = getTodayDate();

  const [truckDownload, setTruckDownload] = useState();
  const [locationDownload, setLocationDownload] = useState();

  const [pageFilter, setPageFilter] = useState();

  const filter = `period[start]=${startDate}&period[end]=${endDate}`;
  const [locationFilter, setLocationFilter] = useState();
  const [truckfilter, setTruckFilter] = useState();
  const [dateFilter, setDateFilter] = useState(filter);
  const [dateRange, setDateRange] = useState([startDate, endDate]);

  const { getCSVExport, csvData, isExporting, isDownloading } =
    useGetCSVExport();

  useFilterGraph(
    truckfilter,
    locationFilter,
    null,
    pageFilter,
    null,
    getTruckManagement
  );

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
                    entity: "truck_management",
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
              onClick={() => {
                const data = {
                  export: {
                    entity: "truck_management",
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
        >
          <Dropdown
            // background={Theme.colors.secondaryColor}

            name="location"
            label="Location"
            onChange={(data) => {
              const { location } = data;
              console.log("location", location);
              const filter = location ? `location=${location}` : null;
              resetPagination();
              setLocationFilter(filter);
              resetPagination();
              setLocationDownload(location);
            }}
            data={locationsDropdownData}
            gap="2rem"
            minWidth="22rem"
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
              resetPagination();
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
            text="Truck  Management:"
            dateRange={dateRange}
            count={data?.length}
            data={data}
          />
        </StyledBox>

        <StyledBox>
          {isLoading ? (
            <SpinnerWithText isLoading={isLoading} margin="1rem 0 0 0" />
          ) : (
            <>
              <TruckManagementTable data={data} />
            </>
          )}

          <Paginations
            getData={getTruckManagement}
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

export default TruckManagment;
