import { StyledDashboardContentWrapper } from "../../../components/common/Basics/DashboardContentWrapper";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";
import EditClient from "./EditClient";

const EditClientsPage = () => {
  return (
    <DashboardLayout>
      <StyledDashboardContentWrapper>
        <PageHeaderLayout>
          <StyledDivFlex></StyledDivFlex>
        </PageHeaderLayout>
        <EditClient />
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default EditClientsPage;
