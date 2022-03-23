import { StyledDashboardContentWrapper } from "../../../components/common/Basics/DashboardContentWrapper";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledPageHeaderButton } from "../../../components/common/Basics/PageHeaderButton";
import { StyledButton } from "../../../components/common/Button/style";
import Dropdown from "../../../components/common/Dropdown";
import PageHeadingButtons from "../../../components/common/PageButton";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";
import { widgets, years } from "../../../DUMMYDATA";
import { Theme } from "../../../Theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import PlusSquare from "../../../Icons/PlusSquare";
import CardWidget from "../../../components/Widget";
import { StyledText } from "../../../components/common/Basics/StyledText";
import { StyledBox } from "../../../components/common/Basics/DivBox";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

const GeneralDashboard = () => {
  return (
    <DashboardLayout>
      <StyledDashboardContentWrapper>
        <PageHeaderLayout>
          <StyledDivFlex gap="1rem">
            <StyledPageHeaderButton>Report Via Email</StyledPageHeaderButton>
            <StyledPageHeaderButton>Download Report</StyledPageHeaderButton>
          </StyledDivFlex>
        </PageHeaderLayout>
        <StyledDivFlex
          // background={Theme.colors.neutralColor}
          padding="1rem 8rem"
          // marginTop="2rem"
          justifyContent="flex-end"
          gap="4rem"
          alignItems="center"
        >
          <Dropdown
            // background={Theme.colors.secondaryColor}
            name="widget"
            label="Add Widget"
            onChange={(data) => console.log("user selection", data)}
            data={widgets}
            gap="2rem"
            icon={
              <AddBoxOutlinedIcon
                fontSize="large"
                style={{ color: "#606060" }}
              />
            }
          />
          <Dropdown
            // background={Theme.colors.secondaryColor}
            name="widget"
            label="filter year"
            onChange={(data) => console.log("user selection", data)}
            data={years}
            gap="2rem"
            icon={
              <KeyboardArrowDownIcon
                fontSize="large"
                style={{ color: "#606060" }}
              />
            }
          />
        </StyledDivFlex>

        <StyledBox padding="1rem 8rem" marginTop="2rem">
          <StyledText
            fontSize="2.4rem"
            fontWeight="500"
            color={Theme.colors.neutralColor2}
          >
            Year 2022
          </StyledText>
          <StyledDivFlex gap="2rem" marginTop="2rem">
            <CardWidget
              label="Number of Operators"
              count="60"
              icon={
                <MoreHorizOutlinedIcon
                  fontSize="large"
                  color={Theme.colors.neutralColor6}
                />
              }
            />
            <CardWidget
              label="Activated Trucks"
              count="70"
              icon={
                <MoreHorizOutlinedIcon
                  fontSize="large"
                  color={Theme.colors.neutralColor6}
                />
              }
            />
            <CardWidget
              label="Overall Uptime (Hours)"
              count="2556"
              icon={
                <MoreHorizOutlinedIcon
                  fontSize="large"
                  color={Theme.colors.neutralColor6}
                />
              }
            />
          </StyledDivFlex>
          // table
          <StyledText fontSize="20rem">This is tanle</StyledText>
        </StyledBox>
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default GeneralDashboard;
