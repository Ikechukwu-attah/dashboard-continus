import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StyledDashboardContentWrapper } from "../../../components/common/Basics/DashboardContentWrapper";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledPageHeaderButton } from "../../../components/common/Basics/PageHeaderButton";
import PageHeadingButtons from "../../../components/common/PageButton";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";
import AddUser from "../AddUser";

import UsersTable from "./UsersTable";
import { useGetAllUsers } from "./hooks/useGetUsers";
import SpinnerWithText from "../../../components/common/SpinnerWithText";

const UserManagement = () => {
  const [showUserList, setShowUserList] = useState(true);

  console.log("showUserList", showUserList);
  const { isLoading, getAllUsers, data } = useGetAllUsers();

  useEffect(() => {
    getAllUsers();
  }, []);

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
          isLoading ? (
            <SpinnerWithText isLoading={isLoading} margin="3rem 0 0 0" />
          ) : (
            <UsersTable data={data} getAllUsers={getAllUsers} />
          )
        ) : (
          <AddUser
            setShowUserList={setShowUserList}
            getAllUsers={getAllUsers}
          />
        )}
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default UserManagement;
