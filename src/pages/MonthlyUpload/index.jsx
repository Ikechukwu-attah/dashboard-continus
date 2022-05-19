import { useState } from "react";
import { StyledDashboardContentWrapper } from "../../components/common/Basics/DashboardContentWrapper";
import { StyledDivFlex } from "../../components/common/Basics/DivFlex";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../components/Layouts/HeaderLayout";
import MonthlyAvailabilityUpload from "./DataUpload";
import { useUploadMonthlyAvailability } from "./hooks/useUploadMonthlyAvailability";

const AvailablityUpload = () => {
  return (
    <DashboardLayout>
      <StyledDashboardContentWrapper>
        <PageHeaderLayout></PageHeaderLayout>
        <StyledDivFlex>
          <MonthlyAvailabilityUpload />
        </StyledDivFlex>

        {/* forms comes in here */}
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default AvailablityUpload;
