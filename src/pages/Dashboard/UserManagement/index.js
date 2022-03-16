import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledPageHeaderButton } from "../../../components/common/Basics/PageHeaderButton";
import PageHeadingButtons from "../../../components/common/PageButton";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";

const UserManagement = () => {
  const [showUserList, setShowUserList] = useState(true);
  console.log("showUserList", showUserList);
  return (
    <DashboardLayout>
      <PageHeaderLayout>
        <StyledDivFlex>
          {showUserList && (
            <StyledPageHeaderButton onClick={() => setShowUserList(false)}>
              Add user
            </StyledPageHeaderButton>
          )}
        </StyledDivFlex>
      </PageHeaderLayout>

      {showUserList ? <h1>hello user</h1> : <h1>Add user</h1>}
    </DashboardLayout>
  );
};

export default UserManagement;
