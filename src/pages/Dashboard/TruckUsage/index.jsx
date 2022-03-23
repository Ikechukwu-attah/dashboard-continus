import React from "react";
import { StyledDashboardContentWrapper } from "../../../components/common/Basics/DashboardContentWrapper";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { StyledPageHeaderButton } from "../../../components/common/Basics/PageHeaderButton";
import PageHeadingButtons from "../../../components/common/PageButton";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";
import Dropdown from "../../../components/common/Dropdown";
import { locations, period, trucks } from "../../../DUMMYDATA";
import { Theme } from "../../../Theme";
import SubHeaderLayout from "../../../components/Layouts/SubHeaderLayout";
import { StyledBox } from "../../../components/common/Basics/DivBox";

const TruckUsage = () => {
  return (
    <DashboardLayout>
      {/* <StyledDashboardContentWrapper> */}
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
          onChange={(data) => console.log("user selection", data)}
          data={locations}
          gap="2rem"
          icon={
            <KeyboardArrowDownIcon
              fontSize="large"
              style={{ color: "#606060" }}
            />
          }
        />
        <Dropdown
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
        />

        <Dropdown
          // background={Theme.colors.secondaryColor}
          name="truck"
          label="Filter Truck"
          onChange={(data) => console.log("user selection", data)}
          data={trucks}
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
          text="Truck Usage for the period:"
          date="1 Feb, 2022 - 28th Feb, 2022"
          count="25 Trucks"
        />
      </StyledBox>
      {/* </StyledDashboardContentWrapper> */}
    </DashboardLayout>
  );
};

export default TruckUsage;
