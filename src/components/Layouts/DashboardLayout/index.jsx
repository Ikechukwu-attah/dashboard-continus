import { useContext } from "react";
import { StyledDivFlex } from "../../common/Basics/DivFlex";
import SideBar from "../../SideBar";
import Navbar from "../../Navbar";
import { StyledBox } from "../../common/Basics/DivBox";
import { globalContext } from "../../../Context/GlobalContext";
import { StyledButton } from "../../common/Button/style";
import { Theme } from "../../../Theme";
import { StyledTextHeading } from "../../common/Basics/Heading";

const DashboardLayout = ({ children }) => {
  const { pageName } = useContext(globalContext);
  return (
    <StyledDivFlex maxHeight="100vh" overflow="hidden">
      <SideBar />

      <StyledBox width="80%" widthL="100%">
        <Navbar />

        {children}
      </StyledBox>
    </StyledDivFlex>
  );
};

export default DashboardLayout;
