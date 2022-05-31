import React, { useContext, useEffect, useState } from "react";

import { StyledDashboardContentWrapper } from "../../../components/common/Basics/DashboardContentWrapper";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledPageHeaderButton } from "../../../components/common/Basics/PageHeaderButton";
import Dropdown from "../../../components/common/Dropdown";
import PageHeadingButtons from "../../../components/common/PageButton";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";
import { locations, period, trucks } from "../../../DUMMYDATA";
import { Theme } from "../../../Theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SubHeaderLayout from "../../../components/Layouts/SubHeaderLayout";
import { StyledBox } from "../../../components/common/Basics/DivBox";
import { batteryUsage } from "../../../DUMMYDATACHART.js";
import { StyledText } from "../../../components/common/Basics/StyledText";
import BatteryGraph from "./BatteryGraph";
import { useGetCSVExport } from "../../../hooks/useGetCSVExport";
import { dropdownFilterContext } from "../../../Context/DropdownFiltersContext";
import { useGetBattery } from "./hooks/useGetBattery";
import { getPreviousDate, getTodayDate } from "../../../utils/GetDate";
import { formatDate } from "../../../utils/FormatDate";
import PickDate from "../../../components/common/DatePicker";
import { useFilterGraph } from "../../../hooks/useGraphFilter";
import SpinnerWithText from "../../../components/common/SpinnerWithText";
import MapTokenToUser from "../../../Authorization/MapTokenToUser";
import SingleDatePicker from "../../../components/common/SingleDatePicker";
const Battery = () => {
  const { getBattery, data, error, isLoading } = useGetBattery();

  const [startDate, setStartDate] = useState(getTodayDate());
  const [endDate, setEndDate] = useState(getTodayDate());
  const [truckDownload, setTruckDownload] = useState();
  const [locationDownload, setLocationDownload] = useState();

  const filter = `period[start]=${startDate}&period[end]=${endDate}`;
  const [dateRange, setDateRange] = useState([startDate, endDate]);
  console.log("dateRage", dateRange);

  const [truckFilter, setTruckFilter] = useState();
  const [locationFilter, setLocationFilter] = useState();
  const [dateFilter, setDateFilter] = useState(filter);
  const { getCSVExport, csvData, isDownloading, isExporting } =
    useGetCSVExport();

  const { truckDropdownData, locationsDropdownData } = useContext(
    dropdownFilterContext
  );

  // useEffect(() => {
  //   getBattery(filter);
  // }, []);

  useFilterGraph(
    truckFilter,
    locationFilter,
    dateFilter,
    null,
    null,
    getBattery
  );

  return (
    <DashboardLayout>
      <StyledDashboardContentWrapper>
        <PageHeaderLayout>
          <StyledDivFlex gap="1rem" flexDirectionSd="column" widthSd="100%">
            <StyledPageHeaderButton
              fontSizeSd="1.2rem"
              onClick={() => {
                const user = MapTokenToUser();
                console.log("user export", user.user.email);
                const data = {
                  export: {
                    entity: "battery_management",
                    query: {
                      period: {
                        start: startDate,
                        end: endDate,
                      },
                      truck: truckDownload,
                      location: locationDownload,
                    },
                    as: "email",
                    recipients: [user.user.email],
                  },
                };

                getCSVExport(data);
              }}
            >
              {" "}
              {isExporting ? "Sending......" : " Report Via Email"}
            </StyledPageHeaderButton>
            <StyledPageHeaderButton
              fontSizeSd="1.2rem"
              onClick={() => {
                const data = {
                  export: {
                    entity: "battery_management",
                    query: {
                      period: {
                        start: startDate,
                        end: endDate,
                      },
                      truck: truckDownload,
                      location: locationDownload,
                    },
                    as: "download",
                  },
                };

                getCSVExport(data);
              }}
            >
              {" "}
              {isDownloading ? "Downloading" : "Download Report"}
            </StyledPageHeaderButton>
          </StyledDivFlex>
        </PageHeaderLayout>

        <StyledDivFlex
          // background={Theme.colors.neutralColor}
          padding="1rem 8rem"
          // marginTop="2rem"
          justifyContent="flex-end"
          gap="4rem"
          alignItems="center"
          paddingM="1rem 0"
          gapM="1.5rem"
          justifyContentM="center"
          flexDirectionS="column"
        >
          <Dropdown
            // background={Theme.colors.secondaryColor}
            name="location"
            label="Location"
            onChange={(data) => {
              console.log("user selection", data);
              const { location } = data;
              const filter = location && `location=${location}`;
              setLocationFilter(filter);
              setLocationDownload(location);
            }}
            data={locationsDropdownData}
            gap="2rem"
            minWidth="20rem"
            widthS="90%"
            icon={
              <KeyboardArrowDownIcon
                fontSize="large"
                style={{ color: "#606060" }}
              />
            }
          />
          {/* <PickDate
            onChange={(date) => {
              const filter =
                date &&
                `period[start]=${
                  formatDate(date[0])["yyyy-mm-dd"]
                }&period[end]=${formatDate(date[1])["yyyy-mm-dd"]} 
               `;
              setDateFilter(filter);
              // console.log("date", date);
              setDateRange(date);
              setStartDate(formatDate(date[0])["yyyy-mm-dd"]);
              setEndDate(formatDate(date[1])["yyyy-mm-dd"]);
            }}
          /> */}

          <SingleDatePicker
            onChange={(date) => {
              console.log("single date", date);
              const filterDate = date ? date : new Date();
              console.log("filterDate", filterDate);
              const filter =
                filterDate &&
                `period[start]=${
                  formatDate(filterDate)["yyyy-mm-dd"]
                }&period[end]=${formatDate(filterDate)["yyyy-mm-dd"]} 
               `;
              setDateFilter(filter);
              // console.log("confirm", filter);

              setDateRange([filterDate, filterDate]);
              setStartDate(formatDate(filterDate)["yyyy-mm-dd"]);
              setEndDate(formatDate(filterDate)["yyyy-mm-dd"]);
            }}
            widthS="90%"
          />

          <Dropdown
            // background={Theme.colors.secondaryColor}
            name="truck"
            label="Filter Truck"
            onChange={(data) => {
              const { truck } = data;
              const filter = truck && `truck=${truck}`;
              setTruckFilter(filter);
              setTruckDownload(truck);
            }}
            data={truckDropdownData}
            gap="2rem"
            minWidth="20rem"
            widthS="90%"
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
            text="Energy for the period:"
            dateRange={dateRange}
          />

          {/* <StyledDivFlex
            padding="1rem 8rem"
            justifyContent="flex-end"
            gap="2rem"
          >
            <StyledDivFlex alignItems="center" gap="1rem">
              <StyledText
                height="2px"
                width="80px"
                background="#19A979"
              ></StyledText>
              <StyledText
                fontSize="1.8rem"
                fontWeight="500"
                color={Theme.colors.neutralColor2}
              >
                Low energy State
              </StyledText>
            </StyledDivFlex>

            <StyledDivFlex alignItems="center" gap="1rem">
              <StyledText
                height="2px"
                width="80px"
                background="#E8743B"
              ></StyledText>
              <StyledText
                fontSize="1.8rem"
                fontWeight="500"
                color={Theme.colors.neutralColor2}
              >
                Critical energy state
              </StyledText>
            </StyledDivFlex>
          </StyledDivFlex> */}

          {/* BARCHART STARTS FROM HERE  */}
          {isLoading ? (
            <SpinnerWithText isLoading={isLoading} margin="2rem 0 0 0" />
          ) : (
            <BatteryGraph data={data} isLoading={isLoading} />
          )}

          {/* BARCHART ENDS HERE */}
        </StyledBox>
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default Battery;
