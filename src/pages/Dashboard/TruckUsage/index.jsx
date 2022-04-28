import React, { useContext, useEffect, useState } from "react";

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
import { useGetTruckUsage } from "./hooks/useGetTruckUsage";
import TruckUsageGraph from "./TruckUsageGraph";
import { formatDate } from "../../../utils/FormatDate";
import PickDate from "../../../components/common/DatePicker";

const TruckUsage = () => {
  const { getTruckUsage, data, error, isLoading } = useGetTruckUsage();
  const [dateRange, setDateRange] = useState();
  useEffect(() => {
    getTruckUsage();
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
          <PickDate
            onChange={(date) => {
              const filter = `?period[start]=${formatDate(date[0])[
                "yyyy-mm-dd"
              ].replace(/(^|\D)(\d)(?!\d)/g, "$10$2")}&period[end]=${formatDate(
                date[1]
              )["yyyy-mm-dd"].replace(/(^|\D)(\d)(?!\d)/g, "$10$2")} 
               `;
              setDateRange(date);
              getTruckUsage(filter);
            }}
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
            dateRange={dateRange}
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
          <TruckUsageGraph data={dummyTruckData} />
          {/* BARCHART ENDS HERE */}
        </StyledBox>
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default TruckUsage;
