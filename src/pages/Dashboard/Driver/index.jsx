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

const Driver = () => {
  const { data, isLoading, error, getDriver, totalPages } = useGetDriver();
  const { truckDropdownData, locationsDropdownData } = useContext(
    dropdownFilterContext
  );

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
            date="1 Feb, 2022 - 28th Feb, 2022"
            count={data?.length}
          />
        </StyledBox>

        <StyledBox>
          <DriversTable data={data} />
          <Paginations getData={getDriver} totalPages={totalPages} />
        </StyledBox>
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default Driver;
