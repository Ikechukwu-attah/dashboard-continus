import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledPageHeaderButton } from "../../../components/common/Basics/PageHeaderButton";
import { StyledButton } from "../../../components/common/Button/style";
import PageHeadingButtons from "../../../components/common/PageButton";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";

const GeneralDashboard = () => {
  return (
    <DashboardLayout>
      <PageHeaderLayout>
        <StyledDivFlex gap="1rem">
          <StyledPageHeaderButton>Report Via Email</StyledPageHeaderButton>
          <StyledPageHeaderButton>Download Report</StyledPageHeaderButton>
        </StyledDivFlex>
      </PageHeaderLayout>
    </DashboardLayout>
  );
};

export default GeneralDashboard;
