import React, { useEffect, useState, useContext } from "react";
import { StyledDashboardContentWrapper } from "../../../components/common/Basics/DashboardContentWrapper";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledPageHeaderButton } from "../../../components/common/Basics/PageHeaderButton";
import Dropdown from "../../../components/common/Dropdown";
import PageHeadingButtons from "../../../components/common/PageButton";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";
import { Theme } from "../../../Theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { locations, period, trucks } from "../../../DUMMYDATA";
import { StyledBox } from "../../../components/common/Basics/DivBox";
import SubHeaderLayout from "../../../components/Layouts/SubHeaderLayout";
import { useOccupancyJournal } from "./hooks/useGetOccupancyJournal";
import JournalTable from "./JournalTable";
import Paginations from "../../../components/common/Paginations";
import { removeDuplicate } from "../../../components/common/RemoveDuplicate";
import { dropdownFilterContext } from "../../../Context/DropdownFiltersContext";
import SpinnerWithText from "../../../components/common/SpinnerWithText";
import { formatDate } from "../../../utils/FormatDate";
import { useFilter } from "../../../hooks/useFilter";
import PickDate from "../../../components/common/DatePicker";
import { useGetCSVExport } from "../../../hooks/useGetCSVExport";
import MapTokenToUser from "../../../Authorization/MapTokenToUser";

const OccupancyJournal = () => {
  const { getOccupancyJournal, error, isLoading, data, totalPages } =
    useOccupancyJournal();
  const [pageFilter, setPageFilter] = useState();
  // const [locationData, setLocationData] = useState([]);
  // const [truckData, setTruckData] = useState([]);
  console.log("data journal", data);

  const { truckDropdownData, locationsDropdownData } = useContext(
    dropdownFilterContext
  );
  const [locationFilter, setLocationFilter] = useState();
  const [truckfilter, setTruckFilter] = useState();
  const [dateFilter, setDateFilter] = useState();
  const [dateRange, setDateRange] = useState([]);

  const {
    getCSVExport,
    csvData,
    isLoading: isLoadingDownload,
  } = useGetCSVExport();

  // console.log("truckdropDown", truckDropdownData);
  // console.log("locationdropDown", locationsDropdownData);

  useEffect(() => {
    getOccupancyJournal();
  }, []);

  useFilter(
    truckfilter,
    dateFilter,
    locationFilter,
    null,
    pageFilter,
    getOccupancyJournal
  );

  // useEffect(() => {
  //   if (data) {
  //     const locationDropdownData = removeDuplicate(
  //       data,
  //       (allData) => allData.City
  //     );
  //     const truckDropdownData = removeDuplicate(
  //       data,
  //       (allData) => allData.Truck
  //     );
  //     if (!locationData.length) {
  //       setLocationData(locationDropdownData);
  //       setTruckData(truckDropdownData);
  //     }
  //   }
  // }, [data]);

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
                    entity: "occupancy_journal",
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
                    entity: "occupancy_journal",
                    query: {},
                    as: "download",
                  },
                };

                getCSVExport(data);
              }}
            >
              {" "}
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
            name="location"
            label="Location"
            onChange={(data) => {
              console.log("user selection", data);
              const { location } = data;
              const filter = location ? `data.City:=:${location}` : "";
              setLocationFilter(filter);
              console.log("filter", filter);
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
          />
          <PickDate
            onChange={(date) => {
              const filter =
                date &&
                `data.Date:between:${formatDate(date[0])["yyyy-mm-dd"]}, ${
                  formatDate(date[1])["yyyy-mm-dd"]
                }`;
              setDateRange(date);
              setDateFilter(filter);
            }}
          />

          <Dropdown
            // background={Theme.colors.secondaryColor}
            name="truck"
            label="Filter Truck"
            onChange={(data) => {
              console.log("user selection", data);
              const { truck } = data;
              console.log("truck", truck);
              const filter = truck ? `data.Truck:=:${truck}` : "";
              // getOccupancyJournal(filter);
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
            text="Occupancy Journal for the period:"
            dateRange={dateRange}
            count={data?.length}
            data={data}
          />
        </StyledBox>
        <StyledBox>
          {isLoading ? (
            <SpinnerWithText isLoading={isLoading} margin="1rem 0 0 0" />
          ) : (
            <JournalTable data={data} />
          )}

          <Paginations
            totalPages={totalPages}
            getData={getOccupancyJournal}
            isLoading={isLoading}
            data={data}
            onPageSelected={setPageFilter}
          />
        </StyledBox>
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default OccupancyJournal;
