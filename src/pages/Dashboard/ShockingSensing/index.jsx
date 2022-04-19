import React, { useState } from "react";
import {
  BarChart,
  Bar,
  Label,
  Cell,
  XAxis,
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

import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";
import { locations, period, trucks } from "../../../DUMMYDATA";
import { Theme } from "../../../Theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SubHeaderLayout from "../../../components/Layouts/SubHeaderLayout";
import { StyledBox } from "../../../components/common/Basics/DivBox";
import { StyledButton } from "../../../components/common/Button/style";
import { dummyShockingData } from "../../../DUMMYDATACHART.js";

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

          {/* BARCHART STARTS FROM HERE  */}
          <StyledBox marginTop="3rem" padding="1rem 8rem" height="60vh">
            <ResponsiveContainer width="100%">
              <BarChart
                // width={10}
                // height={500}
                data={dummyShockingData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#000000" tick={{ fontSize: 10 }}>
                  <Label value="Trucks" offset={0} position="insideBottom" />
                </XAxis>
                <YAxis
                  label={{
                    value: "Percentage",
                    angle: -90,
                    position: "insideLeft",
                  }}
                  stroke="#000000"
                  domain={[0, "dataMax + 0"]}
                  tickCount={8}
                />
                <Tooltip cursor={{ fill: "transparent" }} />
                <Legend />

                <Bar dataKey="bis" fill="#E8743B" />
              </BarChart>
            </ResponsiveContainer>
          </StyledBox>
          {/* BARCHART ENDS HERE */}
        </StyledBox>
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default ShockingSense;
