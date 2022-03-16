import React, { useState } from "react";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledPageHeaderButton } from "../../../components/common/Basics/PageHeaderButton";
import PageHeadingButtons from "../../../components/common/PageButton";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";

const ClientManagment = () => {
  const [showClientList, setShowClientList] = useState(true);

  return (
    <DashboardLayout>
      <PageHeaderLayout>
        <StyledDivFlex>
          {showClientList && (
            <StyledPageHeaderButton onClick={() => setShowClientList(false)}>
              Add user
            </StyledPageHeaderButton>
          )}
        </StyledDivFlex>
      </PageHeaderLayout>

      {showClientList ? <h1>hello client</h1> : <h1>Add client</h1>}
    </DashboardLayout>
  );
};

export default ClientManagment;
