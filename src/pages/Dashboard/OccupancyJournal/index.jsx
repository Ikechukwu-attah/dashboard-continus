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
import { getPreviousDate, getTodayDate } from "../../../utils/GetDate";
import { useFilterGraph } from "../../../hooks/useGraphFilter";

const OccupancyJournal = () => {
  const { getOccupancyJournal, error, isLoading, data, totalPages } =
    useOccupancyJournal();
  const [pageFilter, setPageFilter] = useState();
  // const [locationData, setLocationData] = useState([]);
  // const [truckData, setTruckData] = useState([]);

  const [activePage, setActivePage] = useState(0);

  const resetPagination = () => {
    const pageFilter = `page=1`;
    setPageFilter(pageFilter);
    setActivePage(0);
  };

  const { truckDropdownData, locationsDropdownData } = useContext(
    dropdownFilterContext
  );

  const [startDate, setStartDate] = useState(getPreviousDate(31));
  const [endDate, setEndDate] = useState(getTodayDate());
  const [truckDownload, setTruckDownload] = useState();
  const [locationDownload, setLocationDownload] = useState();

  const filter = `period[start]=${startDate}&period[end]=${endDate}`;
  const [locationFilter, setLocationFilter] = useState();
  const [truckfilter, setTruckFilter] = useState();
  const [dateFilter, setDateFilter] = useState(filter);
  const [dateRange, setDateRange] = useState([startDate, endDate]);

  const {
    getCSVExport,
    csvData,
    isLoading: isLoadingDownload,
  } = useGetCSVExport();

  useFilterGraph(
    truckfilter,
    locationFilter,
    dateFilter,
    pageFilter,
    null,
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
                const data = {
                  export: {
                    entity: "occupancy_journal",
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
              Report Via Email
            </StyledPageHeaderButton>
            <StyledPageHeaderButton
              onClick={() => {
                const data = {
                  export: {
                    entity: "occupancy_journal",
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
              {" "}
              {isLoadingDownload ? "Downloading" : "Download Report"}
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
              const filter = location && `location=${location}`;
              setLocationFilter(filter);
              console.log("filter", filter);
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
              console.log("user selection", data);
              const { truck } = data;
              console.log("truck", truck);
              // const filter = truck ? `data.Truck:=:${truck}` : "";
              const filter = truck && `truck=${truck}`;
              setTruckFilter(filter);
              resetPagination();
              setTruckDownload(truck);
              // getOccupancyJournal(filter);
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
            text="Occupancy Journal for the period:"
            dateRange={dateRange}
            count={data?.length}
            data={data}
          />
        </StyledBox>
        <StyledBox>
          {isLoading ? (
            <SpinnerWithText
              isLoading={isLoading}
              margin="1rem 0 0 0"
              spinnerText="Kindly wait. This can take up to 2mins..."
            />
          ) : (
            <JournalTable data={data} />
          )}

          <Paginations
            totalPages={totalPages}
            getData={getOccupancyJournal}
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

export default OccupancyJournal;
