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

const Driver = () => {
  const { data, isLoading, error, getDriver, totalPages } = useGetDriver();
  const [dateRange, setDateRange] = useState([]);
  const { truckDropdownData, locationsDropdownData } = useContext(
    dropdownFilterContext
  );

  useEffect(() => {
    const allFilter = `?where=data.Created on:between:2022-04-19, 2022-04-12|data.Trucks:in:BIS/NB/006|data.City:in:Ota`;
    getDriver(allFilter);
  }, [dateRange, truckDropdownData, locationsDropdownData]);

  useEffect(() => {
    getDriver();
  }, []);

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
              const filter = `?where=data.City:=:${location}`;
              getDriver(filter);
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
              const filter = `?where=data.Created on:between:${
                formatDate(date[0])["yyyy-mm-dd"]
              }, ${formatDate(date[1])["yyyy-mm-dd"]}`;
              setDateRange(date);
              console.log("date===>implenting", filter);
              getDriver(filter);
            }}
          />

          <Dropdown
            // background={Theme.colors.secondaryColor}
            name="truck"
            label="Truck"
            onChange={(data) => {
              const { truck } = data;
              const filter = `?where=data.Trucks:=:${truck}`;
              getDriver(filter);
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
          />
        </StyledBox>
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default Driver;
