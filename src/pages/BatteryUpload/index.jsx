import React from "react";
import { StyledDashboardContentWrapper } from "../../components/common/Basics/DashboardContentWrapper";
import { StyledDivFlex } from "../../components/common/Basics/DivFlex";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../components/Layouts/HeaderLayout";
import BatteryUploadForm from "./UploadForm";

const BatteryUpload = () => {
  return (
    <DashboardLayout>
      <StyledDashboardContentWrapper>
        <PageHeaderLayout></PageHeaderLayout>
        <StyledDivFlex>
          <BatteryUploadForm />
        </StyledDivFlex>

        {/* forms comes in here */}
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default BatteryUpload;
