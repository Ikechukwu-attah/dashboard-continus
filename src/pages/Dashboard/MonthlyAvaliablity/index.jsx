import React from "react";
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

const MonthlyAvaliablity = () => {
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
        // marginTop="1rem"
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
          text="Monthly Availability for the period:"
          date="1 Feb, 2022 - 28th Feb, 2022"
          count="25 Trucks"
        />

        <StyledDivFlex
          padding="1rem  8rem 1rem 10rem"
          marginTop="2rem"
          gap="4rem"
        >
          <StyledBox
            // padding="5rem"
            background={Theme.colors.neutralColor5}
            width="24%"
          >
            <StyledText
              fontSize="2.4rem"
              fontWeight="500"
              padding="2rem 0 0 2rem"
              Display="inline-block"
              color={Theme.colors.primaryColor}
            >
              28 days (672 Hours)
            </StyledText>
            <StyledDivFlex
              padding="4rem 0rem 0rem 0rem"
              justifyContent="flex-end"
            >
              <StyledText
                fontSize="2.4rem"
                fontWeight="400"
                color={Theme.colors.primaryColor}
                padding="0 2rem 0rem 0rem"
              >
                Uptime
              </StyledText>
            </StyledDivFlex>
            <StyledDivFlex></StyledDivFlex>
          </StyledBox>

          <StyledBox
            // padding="5rem"
            background={Theme.colors.neutralColor5}
            width="24%"
          >
            <StyledText
              fontSize="2.4rem"
              fontWeight="500"
              padding="2rem 0 0 2rem"
              color={Theme.colors.primaryColor}
              Display="inline-block"
            >
              100%
            </StyledText>
            <StyledDivFlex
              padding="4rem 0rem 0rem 0rem"
              justifyContent="flex-end"
            >
              <StyledText
                fontSize="2.4rem"
                fontWeight="400"
                color={Theme.colors.primaryColor}
                padding="0 2rem 0rem 0rem"
              >
                Availability
              </StyledText>
            </StyledDivFlex>
            <StyledDivFlex></StyledDivFlex>
          </StyledBox>
        </StyledDivFlex>
      </StyledBox>

      {/* </StyledDashboardContentWrapper> */}
    </DashboardLayout>
  );
};

export default MonthlyAvaliablity;
