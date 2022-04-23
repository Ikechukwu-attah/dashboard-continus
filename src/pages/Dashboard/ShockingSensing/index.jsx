import React, { useState, useEffect, useContext } from "react";

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
import ShockSensingTable from "./ShockSensingTable";
import { useGetShockingSensingTable } from "./hooks/useGetShockSensingTable";
import Paginations from "../../../components/common/Paginations";
import { useGetShockingSensingBarChart } from "./hooks/useGetShockingSensingBarChart";
import ShockSensingBar from "./ShockSensingBar";
import { dropdownFilterContext } from "../../../Context/DropdownFiltersContext";

const ShockingSense = () => {
  const [activeButton, setActiveButton] = useState("Table");
  const buttons = ["Table", "Graph"];
  const { getShockingSensingTable, totalPages, isLoading, error, data } =
    useGetShockingSensingTable();

  console.log("table Data on filter", data);

  const { getShockingSensingBarChart, graphdata } =
    useGetShockingSensingBarChart();

  const { truckDropdownData, locationsDropdownData } = useContext(
    dropdownFilterContext
  );

  console.log("checking shocking graph data", graphdata);

  useEffect(() => {
    getShockingSensingTable();
  }, []);

  useEffect(() => {
    getShockingSensingBarChart();
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
              getShockingSensingTable(filter);
              console.log("filter", filter);
            }}
            data={locationsDropdownData}
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
            onChange={(data) => {
              const { truck } = data;
              const filter = `?where=data.Trucks:=:${truck}`;
              getShockingSensingTable(filter);
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
            text="Shock Sensing for the period:"
            date="1 Feb, 2022 - 28th Feb, 2022"
            count={data?.length}
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

          {activeButton === "Table" ? (
            <>
              <ShockSensingTable data={data} />
              {data?.length >= 1 && (
                <Paginations
                  getData={getShockingSensingTable}
                  totalPages={totalPages}
                />
              )}
            </>
          ) : (
            <ShockSensingBar data={graphdata} />
          )}

          {/* BARCHART STARTS FROM HERE  */}

          {/* BARCHART ENDS HERE */}
        </StyledBox>
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default ShockingSense;
