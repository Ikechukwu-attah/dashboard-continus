import { StyledDivFlex } from "../../common/Basics/DivFlex";
import SideBar from "../../SideBar";
import Navbar from "../../Navbar";
import { StyledBox } from "../../common/Basics/DivBox";

const DashboardLayout = ({ children }) => {
  return (
    <StyledDivFlex>
      <SideBar />
      <StyledBox>
        <Navbar />
        {children}
      </StyledBox>
    </StyledDivFlex>
  );
};

export default DashboardLayout;
