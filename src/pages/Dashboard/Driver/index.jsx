import React from "react";
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

const Driver = () => {
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
          name="truck"
          label="Truck"
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
          text="Driver  Managment:"
          date="1 Feb, 2022 - 28th Feb, 2022"
        />
      </StyledBox>
      {/* </StyledDashboardContentWrapper> */}
    </DashboardLayout>
  );
};

export default Driver;