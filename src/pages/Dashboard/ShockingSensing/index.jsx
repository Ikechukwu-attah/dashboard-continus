import React from "react";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledPageHeaderButton } from "../../../components/common/Basics/PageHeaderButton";

import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";

const ShockingSense = () => {
  return (
    <DashboardLayout>
      <PageHeaderLayout>
        <StyledDivFlex gap="1rem">
          <StyledPageHeaderButton>Report Via Email</StyledPageHeaderButton>
          <StyledPageHeaderButton>Download Report</StyledPageHeaderButton>
        </StyledDivFlex>
      </PageHeaderLayout>
      <h1>Hello Shocking</h1>
    </DashboardLayout>
  );
};

export default ShockingSense;
