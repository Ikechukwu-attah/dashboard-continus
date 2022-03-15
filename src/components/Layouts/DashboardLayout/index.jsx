import { useContext } from "react";
import { StyledDivFlex } from "../../common/Basics/DivFlex";
import SideBar from "../../SideBar";
import Navbar from "../../Navbar";
import { StyledBox } from "../../common/Basics/DivBox";
import { globalContext } from "../../../Context/GlobalContext";
import { StyledButton } from "../../common/Button/style";
import { Theme } from "../../../Theme";
import { StyledTextHeading } from "../../common/Basics/Heading";

const DashboardLayout = ({ pageTitleButtons, children }) => {
  const { pageName } = useContext(globalContext);
  return (
    <StyledDivFlex>
      <SideBar />
      <StyledBox width="80%">
        <Navbar />
        <StyledDivFlex
          justifyContent="space-between"
          padding="2rem 8rem"
          background={Theme.colors.neutralColor}
          marginTop="1rem"
          alignItems="center"
        >
          <StyledTextHeading
            color={Theme.colors.primaryColor}
            fontSize="3.8rem"
            fontWeight="500"
          >
            {pageName}
          </StyledTextHeading>

          {pageTitleButtons}
        </StyledDivFlex>
        {children}
      </StyledBox>
    </StyledDivFlex>
  );
};

export default DashboardLayout;
