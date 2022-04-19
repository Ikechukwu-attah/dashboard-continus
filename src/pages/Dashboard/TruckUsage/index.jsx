import React from "react";
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
import MiniDropDown from "../../../components/Widget/MiniDropDown";
import { dummyTruckData } from "../../../DUMMYDATACHART.js";
import { StyledText } from "../../../components/common/Basics/StyledText";

const TruckUsage = () => {
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
            text="Truck Usage for the period:"
            date="1 Feb, 2022 - 28th Feb, 2022"
            count="25 Trucks"
          />

          <StyledDivFlex
            padding="1rem 8rem"
            justifyContent="flex-end"
            gap="1rem"
          >
            <StyledDivFlex alignItems="center" gap="1rem">
              <StyledText
                height="28px"
                width="28px"
                background="#E8743B"
              ></StyledText>
              <StyledText
                fontSize="1.8rem"
                fontWeight="500"
                color={Theme.colors.neutralColor2}
              >
                Active usage
              </StyledText>
            </StyledDivFlex>

            <StyledDivFlex alignItems="center" gap="1rem">
              <StyledText
                height="28px"
                width="28px"
                background="#5899DA"
              ></StyledText>
              <StyledText
                fontSize="1.8rem"
                fontWeight="500"
                color={Theme.colors.neutralColor2}
              >
                Driving
              </StyledText>
            </StyledDivFlex>

            <StyledDivFlex alignItems="center" gap="1rem">
              <StyledText
                height="28px"
                width="28px"
                background="#19A979"
              ></StyledText>
              <StyledText
                fontSize="1.8rem"
                fontWeight="500"
                color={Theme.colors.neutralColor2}
              >
                Lifting
              </StyledText>
            </StyledDivFlex>
          </StyledDivFlex>

          {/* BARCHART STARTS FROM HERE  */}
          <StyledBox
            marginTop="3rem"
            padding="1rem 8rem"
            background={Theme.colors.neutralColor}
            height="60vh"
          >
            <ResponsiveContainer width="100%">
              <BarChart
                // width={1000}
                // height={500}
                data={dummyTruckData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#000000">
                  <Label value="Trucks" offset={0} position="insideBottom" />
                </XAxis>
                <YAxis
                  label={{
                    value: "Percentage",
                    angle: -90,
                    position: "insideLeft",
                  }}
                  domain={[0, "dataMax + 0"]}
                />
                <Tooltip />
                <Legend />

                <Bar dataKey="bis" fill="#E8743B" />
                <Bar dataKey="nb" fill="#5899DA" />
                <Bar dataKey="yu" fill="#19A979" />
              </BarChart>
            </ResponsiveContainer>
          </StyledBox>
          {/* BARCHART ENDS HERE */}
        </StyledBox>
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default TruckUsage;
