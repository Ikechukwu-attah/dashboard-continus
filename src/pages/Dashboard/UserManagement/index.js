import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledDashboardContentWrapper } from "../../../components/common/Basics/DashboardContentWrapper";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledPageHeaderButton } from "../../../components/common/Basics/PageHeaderButton";
import PageHeadingButtons from "../../../components/common/PageButton";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";
import AddUser from "../AddUser";

const UserManagement = () => {
  const [showUserList, setShowUserList] = useState(true);
  console.log("showUserList", showUserList);
  return (
    <DashboardLayout>
      <StyledDashboardContentWrapper>
        <PageHeaderLayout>
          <StyledDivFlex>
            {showUserList && (
              <StyledPageHeaderButton onClick={() => setShowUserList(false)}>
                Add user
              </StyledPageHeaderButton>
            )}
          </StyledDivFlex>
        </PageHeaderLayout>

        {showUserList ? (
          <h1>hello user</h1>
        ) : (
          <AddUser setShowUserList={setShowUserList} />
        )}
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default UserManagement;
