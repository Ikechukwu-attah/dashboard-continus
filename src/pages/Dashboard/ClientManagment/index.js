import React, { useContext, useEffect, useState } from "react";
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
import SpinnerWithText from "../../../components/common/SpinnerWithText";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";
import { Theme } from "../../../Theme";
import AddClient from "../AddClient";
import ClientTable from "./ClientTable";
import { useGetAllClient } from "./hooks/useGetClient";
import Paginations from "../../../components/common/Paginations";
import { getClientFilter } from "../../../constants";
import { globalContext } from "../../../Context/GlobalContext";

const ClientManagment = () => {
  const [showClientList, setShowClientList] = useState(true);
  const { getAllClient, data, error, isLoading, totalPages } =
    useGetAllClient();
  const { showListing, setShowListing } = useContext(globalContext);

  // const filter = "?where=data.role:in:user";

  useEffect(() => {
    getAllClient(getClientFilter);
  }, []);

  return (
    <DashboardLayout>
      <StyledDashboardContentWrapper>
        <PageHeaderLayout>
          <StyledDivFlex>
            {showListing && (
              <StyledPageHeaderButton onClick={() => setShowListing(false)}>
                Add Client
              </StyledPageHeaderButton>
            )}
          </StyledDivFlex>
        </PageHeaderLayout>

        {showListing ? (
          isLoading ? (
            <SpinnerWithText isLoading={isLoading} margin="3rem 0 0 0" />
          ) : (
            <StyledBox>
              <ClientTable data={data} getAllClient={getAllClient} />
              {data && (
                <Paginations getData={getAllClient} totalPages={totalPages} />
              )}
            </StyledBox>
          )
        ) : (
          <AddClient
            setShowList={setShowClientList}
            getList={() => getAllClient(getClientFilter)}
            userType="client"
          />
        )}
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default ClientManagment;
