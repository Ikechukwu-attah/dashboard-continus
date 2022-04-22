import React, { useEffect, useState } from "react";
import { StyledDashboardContentWrapper } from "../../../components/common/Basics/DashboardContentWrapper";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledPageHeaderButton } from "../../../components/common/Basics/PageHeaderButton";
import Dropdown from "../../../components/common/Dropdown";
import PageHeadingButtons from "../../../components/common/PageButton";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";
import { locations, maintenance, period, trucks } from "../../../DUMMYDATA";
import { Theme } from "../../../Theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { StyledBox } from "../../../components/common/Basics/DivBox";
import SubHeaderLayout from "../../../components/Layouts/SubHeaderLayout";
import { useGetMaintenance } from "./hooks/useGetMaintenance";
import MaintenanceTable from "./MaintenanceTable";
import DateRangePicker from "../../../components/common/DatePicker";
import PickDate from "../../../components/common/DatePicker";
import { removeDuplicate } from "../../../components/common/RemoveDuplicate";
import Paginations from "../../../components/common/Paginations";
import SpinnerWithText from "../../../components/common/SpinnerWithText";
import { Check } from "@mui/icons-material";

const Maintenance = () => {
  const { getMaintenance, error, isLoading, data, totalPages } =
    useGetMaintenance();
  const [maintenanceData, setMaintenanceData] = useState([]);
  const [truckData, setTruckData] = useState([]);
  const [selectedMaintenanceFilter, setSelectedMaintenanceFilter] = useState(
    []
  );
  const [selectedTruckFilter, setSelectedTruckFilter] = useState([]);

  const [dateRange, setGetDate] = useState([]);

  useEffect(() => {
    getMaintenance();
  }, []);

  useEffect(() => {
    if (data) {
      const maintenanceDropdownData = removeDuplicate(
        data,
        (allData) => allData.Maintenance
      );
      const truckDropdownData = removeDuplicate(
        data,
        (allData) => allData.Truck
      );
      if (!maintenanceData.length) {
        setMaintenanceData(maintenanceDropdownData);
        setTruckData(truckDropdownData);
      }
    }
  }, [data]);

  useEffect(() => {
    const selectedFiltered = `where=data.Truck:=:${selectedTruckFilter.truck},
    data.Maintenance:=:${selectedMaintenanceFilter.maintenance}`;
    //?where=data.Truck:=:truck&&where=data.Maintenance:=:mainte
    // const truckFilter = `?where=data.Truck:=:${selectedTruckFilter.truck}`;
    // const maintenanceFilter = `?where=data.Maintenance:=:${selectedMaintenanceFilter.maintenence}`;
    getMaintenance(selectedFiltered);
  }, [selectedMaintenanceFilter, selectedTruckFilter]);

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
            name="maintenance"
            label="Maintenance"
            onChange={(data) => {
              console.log("selection", data);
              setSelectedMaintenanceFilter(data);
              const { maintenance } = data;
              const filter = `?where=data.Maintenance:=:${maintenance}`;
              getMaintenance(filter);
            }}
            data={maintenanceData}
            minWidth="20rem"
            gap="20rem"
            icon={
              <KeyboardArrowDownIcon
                fontSize="large"
                style={{ color: "#606060" }}
              />
            }
            maxWidth="40rem"
          />

          <Dropdown
            // background={Theme.colors.secondaryColor}
            name="location"
            label="Location"
            onChange={(data) => console.log("user selection", data)}
            data={locations}
            gap="2rem"
            minWidth="20rem"
            icon={
              <KeyboardArrowDownIcon
                fontSize="large"
                style={{ color: "#606060" }}
              />
            }
          />
          {/* <Dropdown
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
          /> */}
          <PickDate onChange={(date) => setGetDate(date)} />

          <Dropdown
            // background={Theme.colors.secondaryColor}
            name="truck"
            label="Filter Truck"
            onChange={(data) => {
              console.log("user selection", data);
              setSelectedTruckFilter(data);
              const { truck } = data;
              const filter = `?where=data.Truck:=:${truck}`;
              getMaintenance(filter);
            }}
            data={truckData}
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

        <StyledBox background={Theme.colors.neutralColor}>
          {/* <SpinningLoader /> */}
          <SubHeaderLayout
            text="Occupancy Journal for the period:"
            dateRange={dateRange}
            count={data?.length}
            // 1 Feb, 2022 - 28th Feb, 2022
          />
        </StyledBox>

        <StyledBox>
          {isLoading ? (
            <SpinnerWithText isLoading={isLoading} margin="1rem 0 0 0 " />
          ) : (
            <>
              <MaintenanceTable data={data} />

              <Paginations getData={getMaintenance} totalPages={totalPages} />
            </>
          )}
        </StyledBox>
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default Maintenance;
