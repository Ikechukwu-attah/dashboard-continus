import React, { useState } from "react";
import { StyledDashboardContentWrapper } from "../../../components/common/Basics/DashboardContentWrapper";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledPageHeaderButton } from "../../../components/common/Basics/PageHeaderButton";
import Dropdown from "../../../components/common/Dropdown";

import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";
import { locations, period, trucks } from "../../../DUMMYDATA";
import { Theme } from "../../../Theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SubHeaderLayout from "../../../components/Layouts/SubHeaderLayout";
import { StyledBox } from "../../../components/common/Basics/DivBox";
import { StyledButton } from "../../../components/common/Button/style";

const ShockingSense = () => {
  const [activeButton, setActiveButton] = useState("Table");
  const buttons = ["Table", "Graph"];
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
            text="Shock Sensing for the period:"
            date="1 Feb, 2022 - 28th Feb, 2022"
            count="25 Trucks"
            buttons={
              <StyledDivFlex gap="2rem">
                {buttons.map((text) => (
                  <StyledButton
                    borderRadius="3rem"
                    fontSize="1.8rem"
                    background={
                      text === activeButton
                        ? Theme.colors.primaryColor
                        : Theme.colors.neutralColor
                    }
                    color={
                      text === activeButton
                        ? Theme.colors.neutralColor
                        : Theme.colors.primaryColor
                    }
                    border={
                      text === activeButton
                        ? "none"
                        : `1px solid ${Theme.colors.primaryColor}`
                    }
                    fontWeight="500"
                    padding="1rem 3rem"
                    // color={Theme.colors.neutralColor}
                    onClick={() => setActiveButton(text)}
                  >
                    {text}
                  </StyledButton>
                ))}
              </StyledDivFlex>
            }
          />
        </StyledBox>
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default ShockingSense;
