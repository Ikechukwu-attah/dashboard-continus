import React, { useEffect, useState, useContext } from "react";
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
import AddClient from "../AddClient";
import { StyledBox } from "../../../components/common/Basics/DivBox";
import Paginations from "../../../components/common/Paginations";
import { getUserFilter } from "../../../constants";
import { globalContext } from "../../../Context/GlobalContext";
// import { globalContext } from "../../../Context/GlobalContext";
const UserManagement = () => {
  const [showUserList, setShowUserList] = useState(true);
  // const{showList,setShowList}  = useContext(globalContext)
  const { showListing, setShowListing } = useContext(globalContext);

  console.log("showUserList", showUserList);
  const { isLoading, getAllUsers, data, totalPages } = useGetAllUsers();
  console.log("data confirmation", data);

  // const filter = "?where=data.role:in:admin,personnel";

  useEffect(() => {
    getAllUsers(getUserFilter);
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
            <StyledBox>
              <UsersTable data={data} getAllUsers={getAllUsers} />
              {data && (
                <Paginations getData={getAllUsers} totalPages={totalPages} />
              )}
            </StyledBox>
          )
        ) : (
          <AddClient
            setShowList={setShowUserList}
            getList={() => getAllUsers(getUserFilter)}
            userType="admin"
          />
        )}
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default UserManagement;
