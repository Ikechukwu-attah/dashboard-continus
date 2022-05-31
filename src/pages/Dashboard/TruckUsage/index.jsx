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
import SpinnerWithText from "../../../components/common/SpinnerWithText";
import BusyOverlay from "../../../components/common/BusyOverlay";
import { getPreviousDate, getTodayDate } from "../../../utils/GetDate";
import { dropdownFilterContext } from "../../../Context/DropdownFiltersContext";
import { useFilterGraph } from "../../../hooks/useGraphFilter";
import MapTokenToUser from "../../../Authorization/MapTokenToUser";
import { useGetCSVExport } from "../../../hooks/useGetCSVExport";
import SingleDatePicker from "../../../components/common/SingleDatePicker";

const TruckUsage = () => {
  const { getTruckUsage, data, error, isLoading } = useGetTruckUsage();

  const [startDate, setStartDate] = useState(getPreviousDate(31));
  const [endDate, setEndDate] = useState(getTodayDate());
  const [truckDownload, setTruckDownload] = useState();
  const [locationDownload, setLocationDownload] = useState();

  const filter = `period[start]=${startDate}&period[end]=${endDate}`;
  const [dateRange, setDateRange] = useState([startDate, endDate]);
  const [truckFilter, setTruckFilter] = useState();
  const [locationFilter, setLocationFilter] = useState();
  const [dateFilter, setDateFilter] = useState(filter);
  const { getCSVExport, csvData, isDownloading, isExporting } =
    useGetCSVExport();

  const { truckDropdownData, locationsDropdownData } = useContext(
    dropdownFilterContext
  );

  useFilterGraph(
    truckFilter,
    locationFilter,
    dateFilter,
    null,
    null,
    getTruckUsage
  );

  // useEffect(() => {
  //   const startDate = getPreviousDate(1);
  //   const endDate = getTodayDate();

  //   const filter = `?period[start]=${startDate}
  //   &period[end]=${endDate}`;
  //   setDateFilter(filter);

  //   setDateRange([startDate, endDate]);
  //   getTruckUsage(filter);
  // }, []);

  // useEffect(() => {
  //   const filter = `${dateFilter}${truckFilter ? `&${truckFilter}` : ""}${
  //     locationFilter ? `&${locationFilter}` : ""
  //   }`;
  //   console.log("truck filter concat", filter);
  //   getTruckUsage(filter);
  // }, [truckFilter, locationFilter, dateFilter]);
  // useFilterGraph(truckFilter, locationFilter, dateFilter, null, getTruckUsage);
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
                    entity: "truck_usage",
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
              {isExporting ? "Sending..." : " Report Via Email"}
            </StyledPageHeaderButton>
            <StyledPageHeaderButton
              fontSizeSd="1.2rem"
              onClick={() => {
                const data = {
                  export: {
                    entity: "truck_usage",
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
            multiSelect={true}
          />
          <PickDate
            onChange={(date) => {
              const filter =
                date &&
                `period[start]=${
                  formatDate(date[0])["yyyy-mm-dd"]
                }&period[end]=${formatDate(date[1])["yyyy-mm-dd"]} 
               `;
              setDateFilter(filter);
              setDateRange(date);
              setStartDate(formatDate(date[0])["yyyy-mm-dd"]);
              setEndDate(formatDate(date[1])["yyyy-mm-dd"]);
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
            multiSelect={true}
          />
        </StyledDivFlex>
        <StyledBox background={Theme.colors.neutralColor} padding="0 0 4rem 0">
          {/* <SpinningLoader /> */}
          <SubHeaderLayout
            text="Truck Usage for the period:"
            dateRange={dateRange}
            count={data?.length}
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
                widthS="14px"
                heightS="14px"
              ></StyledText>
              <StyledText
                fontSize="1.8rem"
                fontWeight="500"
                fontSizeS="1rem"
                color={Theme.colors.neutralColor2}
              >
                Driving
              </StyledText>
            </StyledDivFlex>

            <StyledDivFlex alignItems="center" gap="1rem">
              <StyledText
                height="28px"
                width="28px"
                widthS="14px"
                heightS="14px"
                background="#19A979"
              ></StyledText>
              <StyledText
                fontSize="1.8rem"
                fontSizeS="1rem"
                fontWeight="500"
                color={Theme.colors.neutralColor2}
              >
                Lifting
              </StyledText>
            </StyledDivFlex>

            {/* <StyledDivFlex alignItems="center" gap="1rem">
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
            </StyledDivFlex> */}
          </StyledDivFlex>
          {isLoading ? (
            <SpinnerWithText
              isLoading={isLoading}
              spinnerText="Kindly wait. This can take up to 2mins..."
              margin="1rem 0 0 0"
            />
          ) : (
            <TruckUsageGraph data={data} />
          )}

          {/* BARCHART STARTS FROM HERE  */}

          {/* <BusyOverlay
            isLoading={isLoading}
            spinnerText={data ? "Updating chart..." : "Loading chart ..."}
          /> */}

          {/* BARCHART ENDS HERE */}
        </StyledBox>
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default TruckUsage;
