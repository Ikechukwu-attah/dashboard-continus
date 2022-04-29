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

const Driver = () => {
  const { data, isLoading, error, getDriver, totalPages } = useGetDriver();
  const [dateRange, setDateRange] = useState([]);
  const [pageFilter, setPageFilter] = useState();
  // CREATING FILTER STATE

  // export data useState destructuring
  const {
    getCSVExport,
    csvData,
    isLoading: isLoadingDownload,
  } = useGetCSVExport();

  const [locationFilter, setLocationFilter] = useState();
  const [truckfilter, setTruckFilter] = useState();
  const [dateFilter, setDateFilter] = useState();

  const { truckDropdownData, locationsDropdownData } = useContext(
    dropdownFilterContext
  );

  useFilter(
    truckfilter,
    dateFilter,
    locationFilter,
    null,
    pageFilter,
    getDriver
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
          <StyledDivFlex gap="1rem">
            <StyledPageHeaderButton
              onClick={() => {
                const user = MapTokenToUser();
                console.log("user export", user.user.email);
                const data = {
                  export: {
                    entity: "driver_management",
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
                // const user = MapTokenToUser();
                // console.log("user export", user.user.email);
                const data = {
                  export: {
                    entity: "driver_management",
                    query: {},
                    as: "download",
                    // recipients: [user.user.email],
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

            name="location"
            label="Location"
            onChange={(data) => {
              const { location } = data;
              console.log("location", location);
              const filter = location ? `data.City:=:${location}` : null;
              setLocationFilter(filter);
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
                `data.Created on:between:${
                  formatDate(date[0])["yyyy-mm-dd"]
                }, ${formatDate(date[1])["yyyy-mm-dd"]}`;
              setDateRange(date);
              setDateFilter(filter);
            }}
          />

          <Dropdown
            // background={Theme.colors.secondaryColor}
            name="truck"
            label="Truck"
            onChange={(data) => {
              const { truck } = data;
              const filter = truck ? `data.Trucks:=:${truck}` : "";
              setTruckFilter(filter);
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
            text="Driver  Managment:"
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
              <DriversTable data={data} />
            </>
          )}

          <Paginations
            getData={getDriver}
            totalPages={totalPages}
            isLoading={isLoading}
            data={data}
            onPageSelected={setPageFilter}
          />
        </StyledBox>
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default Driver;
