import React from "react";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import PageHeadingButtons from "../../../components/common/PageButton";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";

const MonthlyAvaliablity = () => {
  return (
    <DashboardLayout
      pageTitleButtons={
        <StyledDivFlex gap="1rem">
          <PageHeadingButtons text="Report Via Email" />
          <PageHeadingButtons text="Download Report" />
        </StyledDivFlex>
      }
    >
      <h1>Monthly Avaliablity</h1>
    </DashboardLayout>
  );
};

export default MonthlyAvaliablity;
