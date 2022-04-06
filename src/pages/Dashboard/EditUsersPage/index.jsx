import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StyledDashboardContentWrapper } from "../../../components/common/Basics/DashboardContentWrapper";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledPageHeaderButton } from "../../../components/common/Basics/PageHeaderButton";
import PageHeadingButtons from "../../../components/common/PageButton";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";
import EditUser from "./EditUserForm";

const EditUsersPage = () => {
  const [showUserList, setShowUserList] = useState(true);

  return (
    <DashboardLayout>
      <StyledDashboardContentWrapper>
        <PageHeaderLayout>
          <StyledDivFlex></StyledDivFlex>
        </PageHeaderLayout>

        <EditUser />
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default EditUsersPage;
