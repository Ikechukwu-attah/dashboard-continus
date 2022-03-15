import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledButton } from "../../../components/common/Button/style";
import PageHeadingButtons from "../../../components/common/PageButton";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";

const GeneralDashboard = () => {
  return (
    <DashboardLayout
      pageTitleButtons={
        <StyledDivFlex gap="1rem">
          <PageHeadingButtons text="Report Via Email" />
          <PageHeadingButtons text="Download Report" />
        </StyledDivFlex>
      }
    >
      <h1>Hello General</h1>
    </DashboardLayout>
  );
};

export default GeneralDashboard;
