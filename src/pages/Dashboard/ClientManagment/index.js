import React, { useState } from "react";
import { StyledDashboardContentWrapper } from "../../../components/common/Basics/DashboardContentWrapper";
import { StyledBox } from "../../../components/common/Basics/DivBox";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledPageHeaderButton } from "../../../components/common/Basics/PageHeaderButton";
import { StyledImage } from "../../../components/common/Basics/StyledImage";
import { StyledText } from "../../../components/common/Basics/StyledText";
import { StyledButton } from "../../../components/common/Button/style";
import { StyledForm } from "../../../components/common/Form/style";
import { StyledInput, StyledLabel } from "../../../components/common/Input";
import PageHeadingButtons from "../../../components/common/PageButton";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";
import { Theme } from "../../../Theme";
import AddClient from "../AddClient";

const ClientManagment = () => {
  const [showClientList, setShowClientList] = useState(true);

  return (
    <DashboardLayout>
      <StyledDashboardContentWrapper>
        <PageHeaderLayout>
          <StyledDivFlex>
            {showClientList && (
              <StyledPageHeaderButton onClick={() => setShowClientList(false)}>
                Add user
              </StyledPageHeaderButton>
            )}
          </StyledDivFlex>
        </PageHeaderLayout>

        {showClientList ? (
          <h1>Clients user </h1>
        ) : (
          <AddClient setShowClientList={setShowClientList} />
        )}
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default ClientManagment;
