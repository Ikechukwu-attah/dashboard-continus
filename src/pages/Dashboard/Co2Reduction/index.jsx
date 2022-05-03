import React, { useContext, useEffect, useState } from "react";
import { StyledDashboardContentWrapper } from "../../../components/common/Basics/DashboardContentWrapper";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledPageHeaderButton } from "../../../components/common/Basics/PageHeaderButton";
import Dropdown from "../../../components/common/Dropdown";
import PageHeadingButtons from "../../../components/common/PageButton";

import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";
import { locations, period, trucks } from "../../../DUMMYDATA";
import { Theme } from "../../../Theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SubHeaderLayout from "../../../components/Layouts/SubHeaderLayout";
import CardWidget from "../../../components/Widget";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { StyledDivGrid } from "../../../components/common/Basics/DivGrid";
import { StyledSpinning } from "../../../components/common/SpinningLoader/style";
import Droplet from "../../../Icons/Droplet";
import Cloud from "../../../Icons/Cloud";
import CloudGreen from "../../../Icons/CloudGreen";
import CloudBlue from "../../../Icons/CloudBlue";
import { Co2DataItem } from "../../../DUMMYDATA";
import { useGetCo2Reduction } from "./hooks/useGetCo2Reduction";
import { dropdownFilterContext } from "../../../Context/DropdownFiltersContext";
import { formatDate } from "../../../utils/FormatDate";
import PickDate from "../../../components/common/DatePicker";
import { getPreviousDate, getTodayDate } from "../../../utils/GetDate";
import { useFilterGraph } from "../../../hooks/useGraphFilter";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Co2Reduction = () => {
  const startDate = getPreviousDate(1);
  const endDate = getTodayDate();
  const filter = `?period[start]=${startDate}&period[end]=${endDate}`;

  const { data, getCo2Reduction, isLoading } = useGetCo2Reduction();
  const { truckDropdownData, locationsDropdownData } = useContext(
    dropdownFilterContext
  );

  const [dateFilter, setDateFilter] = useState(filter);
  const [dateRange, setDateRange] = useState([startDate, endDate]);
  const [truckFilter, setTruckFilter] = useState();
  const [locationFilter, setLocationFilter] = useState();
  console.log("frontend co2", data?.length);

  useFilterGraph(
    truckFilter,
    locationFilter,
    dateFilter,
    null,
    getCo2Reduction
  );

  console.log("date range", dateRange);
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
                `?period[start]=${
                  formatDate(date[0])["yyyy-mm-dd"]
                }&period[end]=${formatDate(date[1])["yyyy-mm-dd"]} 
               `;
              setDateFilter(filter);
              console.log("date", date);
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

        <SubHeaderLayout
          text="C02 Reduction for the period:"
          dateRange={dateRange}
          count={data?.length}
        />

        <StyledDivGrid
          padding="1rem 8rem"
          marginTop="3rem"
          gap="2rem"
          width="100%"
          // flexWrap="wrap"
        >
          <CardWidget
            label="Disel saved (liters)"
            count={Math.round(data?.diesel_saved_in_litres)}
            // background="#5899DA"
            icon={<Droplet />}
            width="100%"
          />

          <CardWidget
            label="Co2 Reduction (Kg)"
            count={Math.round(data?.co2_reduction_in_kg)}
            // background="#5899DA"
            icon={<Cloud />}
            width="100%"
          />

          <CardWidget
            label="Co2 Reduction (tons)"
            count={Math.round(data?.co2_reduction_in_ton)}
            // background="#5899DA"
            icon={<CloudBlue />}
            width="100%"
          />

          <CardWidget
            label="Total Active Usage"
            count={Math.round(data?.total_active_usage)}
            // background="#5899DA"
            icon={<CloudGreen />}
            width="100%"
          />

          {/* {isLoading &&
            !data &&
            Array.from(Array(3).keys()).map((item) => (
              <Skeleton
                style={{
                  height: "25rem",
                  width: "100%",
                  borderRadius: "2rem",
                  bottom: "15rem",
                }}
              />
            ))} */}
        </StyledDivGrid>
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default Co2Reduction;
