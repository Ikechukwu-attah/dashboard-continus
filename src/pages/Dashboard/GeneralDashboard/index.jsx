import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { StyledDashboardContentWrapper } from "../../../components/common/Basics/DashboardContentWrapper";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledPageHeaderButton } from "../../../components/common/Basics/PageHeaderButton";
import { StyledButton } from "../../../components/common/Button/style";
import Dropdown from "../../../components/common/Dropdown";
import PageHeadingButtons from "../../../components/common/PageButton";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { StyledBox } from "../../../components/common/Basics/DivBox";
import WidgetWithDropdown from "../../../components/Widget/WidgetWithDropdown";
import { generalDashbordCardItem } from "../../../DUMMYDATA";
import AvailabilityCard from "./AvailabilityCard";
import PickDate from "../../../components/common/DatePicker";
import SubHeaderLayout from "../../../components/Layouts/SubHeaderLayout";
import { widgetComponents } from "../../../constants";
import { widgetContext } from "../../../Context/WidgetContext";
import { StyledDivGrid } from "../../../components/common/Basics/DivGrid";
import ModifiedCard from "../../../components/Widget/WidgetWithDropdown/ModifiedCard";
import BusyOverlay from "../../../components/common/BusyOverlay";
import { useUpdateWidget } from "./hooks/useUpdateWidget";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { formatDate } from "../../../utils/FormatDate";
import { useFilterGraph } from "../../../hooks/useGraphFilter";
import MapTokenToUser from "../../../Authorization/MapTokenToUser";
import { useGetCSVExport } from "../../../hooks/useGetCSVExport";
import CalendarCheck from "../../../components/Widget/Calendar";
import { getYears } from "../../../utils/GetYears";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const GeneralDashboard = () => {
  const [widgets, setWidgets] = useState();
  const { getCSVExport, csvData, isDownloading, isExporting } =
    useGetCSVExport();

  const captializeText = (text) => {
    return text.replace(
      /(^\w|\s\w)(\S*)/g,
      (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
    );
  };

  // console.log("capitalize", captializeText("james attah"));
  const {
    updateWidget,
    isLoading: isWidgetUpdating,
    updateWidgetdata,
  } = useUpdateWidget();

  const {
    widgets: widgetsData,
    widgetsDropdownData,
    isLoading,
    dateFilter,
    setDateFilter,
    dateRange,
    setDateRange,
    getWidgets,
    data,
    date1,
    date2,
  } = useContext(widgetContext);

  useFilterGraph(null, null, dateFilter, null, null, getWidgets);

  const addWidget = ({ widget }) => {
    const allWidgets = [...widgets];
    if (!allWidgets.includes(widget)) {
      allWidgets.push(widget);
    }

    const data = {
      widgets_to_show: allWidgets,
    };

    updateWidget(data);
  };

  const removeWidget = (widget) => {
    const allWidgets = [...widgets];
    const updatedWidget = allWidgets.filter(
      (widgetName) => widgetName !== widget
    );
    const data = {
      widgets_to_show: updatedWidget,
    };
    updateWidget(data);
  };

  const widgetComponents = [
    {
      widgetName: "operators",
      Component: (
        <WidgetWithDropdown
          label="Number of Operators"
          count={Math.round(widgetsData?.no_of_operators).toLocaleString()}
          onRemove={() => removeWidget("operators")}
          report={<Link to="/driver">View Report</Link>}
        />
      ),
    },
    {
      widgetName: "trucks",
      Component: (
        <WidgetWithDropdown
          label="Activated Trucks"
          count={Math.round(widgetsData?.no_of_trucks).toLocaleString()}
          onRemove={() => removeWidget("trucks")}
          report={<Link to="/truck-management">View Report</Link>}
        />
      ),
    },
    {
      widgetName: "uptime",
      Component: (
        <WidgetWithDropdown
          label="Overall Uptime (Hours)"
          count={Math.round(widgetsData?.total_uptime).toLocaleString()}
          onRemove={() => removeWidget("uptime")}
          report={<Link to="/monthly-avaliablity">View Report</Link>}
        />
      ),
    },
    {
      widgetName: "shock",
      Component: (
        <ModifiedCard
          label="Highest ShockThreshold"
          count={Math.round(widgetsData?.total_no_of_shocks).toLocaleString()}
          report={<Link to="/shocking-sense">View Report</Link>}
          thresholdCount={Math.round(
            widgetsData?.highest_shock_threshold
          ).toLocaleString()}
          onRemove={() => {
            removeWidget("shock");
          }}
        />
      ),
    },
  ];

  useEffect(() => {
    if (widgetsData) {
      const { widgets_to_show } = widgetsData;
      setWidgets(widgets_to_show);
    }
  }, [widgetsData]);

  useEffect(() => {
    if (updateWidgetdata) {
      setWidgets(updateWidgetdata);
    }
  }, [updateWidgetdata]);

  return (
    <DashboardLayout>
      <StyledDashboardContentWrapper>
        <PageHeaderLayout>
          <StyledDivFlex gap="1rem">
            {/* <StyledPageHeaderButton
              onClick={() => {
                const user = MapTokenToUser();
                console.log("user export", user.user.email);
                const data = {
                  export: {
                    entity: "dashboard",
                    query: {},
                    as: "email",
                    recipients: [user.user.email],
                  },
                };

                getCSVExport(data);
              }}
            >
              {isExporting ? "Sending..." : " Report Via Email"}
            </StyledPageHeaderButton> */}
            {/* <StyledPageHeaderButton
              onClick={() => {
                const data = {
                  export: {
                    entity: "dashboard",
                    query: {},
                    as: "download",
                  },
                };

                getCSVExport(data);
              }}
            >
              {isDownloading ? "DownLoading" : "Download Report"}
            </StyledPageHeaderButton> */}
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
            name="widget"
            label="Add Widget"
            onChange={(data) => {
              addWidget(data);
            }}
            data={widgetsDropdownData}
            capitalize
            gap="2rem"
            minWidth="25rem"
            icon={
              <AddBoxOutlinedIcon
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
              setDateRange(date);
            }}
          /> */}

          <Dropdown
            // background={Theme.colors.secondaryColor}
            name="year"
            label="Filter Year"
            onChange={(data) => {
              const { year } = data;
              const date1 = `${year}-01-01`;
              const date2 = `${year}-12-31`;
              const filter =
                year && `period[start]=${date1}&period[end]=${date2}`;
              console.log("year", date1);
              setDateFilter(filter);
              setDateRange([date1, date2]);
            }}
            data={getYears(2010, 2022)}
            gap="2rem"
            minWidth="20rem"
            icon={
              <KeyboardArrowDownIcon
                fontSize="large"
                style={{ color: "#606060" }}
              />
            }
          />
        </StyledDivFlex>

        <StyledBox padding="1rem 8rem" marginTop="2rem" position="relative">
          <SubHeaderLayout
            text="General Dashboard  Managment:"
            dateRange={dateRange}
            // count={data?.length}
            showYear={formatDate(dateRange[0])["yyyy"]}
            data={widgetsData}
          />
          <StyledDivGrid
            // padding="1rem 8rem"
            marginTop="3rem"
            gap="2rem"
            width="100%"
          >
            {/* {widgets?.map((item) => {
              return <>{getWidget(item)}</>;
            })} */}
            {widgetComponents
              ?.reverse()
              .map(
                (widget) =>
                  widgets?.includes(widget.widgetName) && (
                    <>{widget.Component}</>
                  )
              )}
            {isLoading &&
              !widgetsData &&
              Array.from(Array(3).keys()).map((item) => (
                <Skeleton
                  style={{
                    height: "25rem",
                    width: "100%",
                    borderRadius: "2rem",
                  }}
                />
              ))}{" "}
            {widgets?.includes("monthly_availability") && (
              <StyledBox gridColumn={"span 2"}>
                <AvailabilityCard
                  onRemove={() => removeWidget("monthly_availability")}
                  data={data}
                />
              </StyledBox>
            )}
            {widgets?.includes("calendar") && (
              <CalendarCheck onRemove={() => removeWidget("calendar")} />
            )}
          </StyledDivGrid>
          <StyledDivFlex gap="3rem" marginTop="4rem"></StyledDivFlex>
        </StyledBox>
      </StyledDashboardContentWrapper>
      {/* <BusyOverlay
        isLoading={isWidgetUpdating || isLoading}
        spinnerText="Updating widgets..."
      /> */}
    </DashboardLayout>
  );
};

export default GeneralDashboard;
