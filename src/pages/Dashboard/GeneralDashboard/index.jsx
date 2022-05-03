import { useEffect, useState, useContext } from "react";
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

const GeneralDashboard = () => {
  const [widgets, setWidgets] = useState();

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
  } = useContext(widgetContext);

  useFilterGraph(null, null, dateFilter, null, getWidgets);

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
          count={widgetsData?.no_of_operators}
          onRemove={() => removeWidget("operators")}
        />
      ),
    },
    {
      widgetName: "trucks",
      Component: (
        <WidgetWithDropdown
          label="Activated Trucks"
          count={widgetsData?.no_of_trucks}
          onRemove={() => removeWidget("trucks")}
        />
      ),
    },
    {
      widgetName: "uptime",
      Component: (
        <WidgetWithDropdown
          label="Overall Uptime (Hours)"
          count={Math.round(widgetsData?.total_uptime)}
          onRemove={() => removeWidget("uptime")}
        />
      ),
    },
    {
      widgetName: "shock",
      Component: (
        <ModifiedCard
          label="Highest ShockThreshold"
          count={Math.round(widgetsData?.total_no_of_shocks)}
          thresholdCount={Math.round(widgetsData?.highest_shock_threshold)}
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
            name="widget"
            label="Add Widget"
            onChange={(data) => {
              addWidget(data);
            }}
            data={widgetsDropdownData}
            gap="2rem"
            minWidth="25rem"
            icon={
              <AddBoxOutlinedIcon
                fontSize="large"
                style={{ color: "#606060" }}
              />
            }
          />
          <PickDate
            onChange={(date) => {
              const filter =
                date &&
                `?period[start]=${
                  formatDate(date[0])["yyyy-mm-dd"]
                }&period[end]=${formatDate(date[1])["yyyy-mm-dd"]} 
             `;
              setDateFilter(filter);
              setDateRange(date);
            }}
          />
        </StyledDivFlex>

        <StyledBox padding="1rem 8rem" marginTop="2rem" position="relative">
          <SubHeaderLayout
            text="General Dashboard  Managment:"
            dateRange={dateRange}
            // count={data?.length}
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
              ))}
          </StyledDivGrid>
          <StyledDivFlex gap="3rem" marginTop="4rem">
            <AvailabilityCard />
            {/* <CalendarCheck /> */}
          </StyledDivFlex>
        </StyledBox>
      </StyledDashboardContentWrapper>
      <BusyOverlay
        isLoading={isWidgetUpdating || isLoading}
        spinnerText="Updating widgets..."
      />
    </DashboardLayout>
  );
};

export default GeneralDashboard;
