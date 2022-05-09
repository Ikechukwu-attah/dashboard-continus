import React, { useContext, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Label,
  Cell,
  XAxis,
  LabelList,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { StyledDashboardContentWrapper } from "../../../components/common/Basics/DashboardContentWrapper";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledPageHeaderButton } from "../../../components/common/Basics/PageHeaderButton";
import Dropdown from "../../../components/common/Dropdown";
import PageHeadingButtons from "../../../components/common/PageButton";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Theme } from "../../../Theme";
import { period, locations, trucks } from "../../../DUMMYDATA";
import SubHeaderLayout from "../../../components/Layouts/SubHeaderLayout";
import SpinningLoader from "../../../components/common/SpinningLoader";
import { StyledText } from "../../../components/common/Basics/StyledText";
import { StyledBox } from "../../../components/common/Basics/DivBox";
import { dummyDataChart } from "../../../DUMMYDATACHART.js";
import { useMonthlyAvaliablity } from "./hooks/useMonthlyAvaliablity";
import AvaliablityGraph from "./Graph";
import { dropdownFilterContext } from "../../../Context/DropdownFiltersContext";
import { useFilterGraph } from "../../../hooks/useGraphFilter";
import PickDate from "../../../components/common/DatePicker";
import { formatDate } from "../../../utils/FormatDate";
import { useGetCSVExport } from "../../../hooks/useGetCSVExport";
import { getPreviousDate, getTodayDate } from "../../../utils/GetDate";
import DailyRating from "./DailyRatings";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { StyledDivGrid } from "../../../components/common/Basics/DivGrid";

const MonthlyAvaliablity = () => {
  const { getMonthlyAvaliablity, data, error, isLoading, summary } =
    useMonthlyAvaliablity();

  const startDate = getPreviousDate(120);
  const endDate = getTodayDate();

  const filter = `period[start]=${startDate}&period[end]=${endDate}`;
  const [dateRange, setDateRange] = useState([startDate, endDate]);
  const [truckFilter, setTruckFilter] = useState();
  const [locationFilter, setLocationFilter] = useState();
  const [dateFilter, setDateFilter] = useState(filter);
  const { getCSVExport, csvData, isDownloading, isExporting } =
    useGetCSVExport();

  const { truckDropdownData, locationsDropdownData } = useContext(
    dropdownFilterContext
  );

  useFilterGraph(
    truckFilter,
    locationFilter,
    dateFilter,
    null,
    null,
    getMonthlyAvaliablity
  );
  console.log("summary", summary);
  console.log("data avail", data);
  // useEffect(() => {
  //   getMonthlyAvaliablity(
  //     "?period[start]=2022-03-01&truck=BIS/NB/002&period[end]=2022-04-01"
  //   );
  // }, []);
  return (
    <DashboardLayout>
      <StyledDashboardContentWrapper>
        <PageHeaderLayout>
          <StyledDivFlex gap="1rem">
            <StyledPageHeaderButton>Report Via Email</StyledPageHeaderButton>
            <StyledPageHeaderButton>Download Report</StyledPageHeaderButton>
          </StyledDivFlex>
        </PageHeaderLayout>
        <StyledDivFlex
          // background={Theme.colors.neutralColor}
          padding="1rem 8rem"
          // marginTop="1rem"
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
              const filter = data && `location=${location}`;
              setLocationFilter(filter);
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
                `period[start]=${
                  formatDate(date[0])["yyyy-mm-dd"]
                }&period[end]=${formatDate(date[1])["yyyy-mm-dd"]} 
               `;
              setDateFilter(filter);
              setDateRange(date);
            }}
          />

          <Dropdown
            // background={Theme.colors.secondaryColor}
            name="truck"
            label="Filter Truck"
            onChange={(data) => {
              const { truck } = data;
              const filter = data && `truck=${truck}`;
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
            text="Monthly Availability for the period:"
            dateRange={dateRange}
            count={data?.length}
          />
          <StyledDivGrid width="100%" gap="5rem" padding="1rem 8rem">
            {isLoading &&
              Array.from(Array(3).keys()).map((item) => (
                <Skeleton
                  style={{
                    height: "15rem",
                    width: "100%",
                    marginTop: "5rem",
                  }}
                />
              ))}
          </StyledDivGrid>
          <>
            {data && !isLoading && (
              <StyledDivFlex
                padding="1rem  8rem 1rem 10rem"
                marginTop="2rem"
                gap="4rem"
              >
                <DailyRating
                  label="Uptime"
                  count={`${
                    summary?.total_days
                      ? summary?.total_days.toLocaleString()
                      : 0
                  } days   (${
                    summary?.total_uptime_hours
                      ? summary?.total_uptime_hours.toLocaleString()
                      : 0
                  } Hours)`}
                />
                <DailyRating
                  label=" Availability"
                  count={`${
                    summary?.avg_availability
                      ? summary?.avg_availability?.toFixed()
                      : 0
                  }%`}
                />
              </StyledDivFlex>
            )}

            {/* BARCHART STARTS FROM HERE  */}
            <AvaliablityGraph data={data} isLoading={isLoading} />
          </>
          {/* BARCHART ENDS HERE */}
        </StyledBox>
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default MonthlyAvaliablity;
