import React, { useState, useContext } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Theme } from "../../Theme";
import { StyledBox } from "../common/Basics/DivBox";
import { StyledDivFlex } from "../common/Basics/DivFlex";
import { StyledList, StyledUl } from "../common/Basics/list";
import { StyledImage } from "../common/Basics/StyledImage";
import { sideBarData, adminNavbarData } from "./sidebarData";

import { globalContext } from "../../Context/GlobalContext";
import LogOutIcon from "../../Icons/LogOut";
import { StyledText } from "../common/Basics/StyledText";
import MapTokenToUser from "../../Authorization/MapTokenToUser";
import MenuIcon from "@mui/icons-material/Menu";
// import BisedgeLogo from "../../../public/assets/Bisedge-sidelogo.svg";
import BisedgeSideLogo from "../Images/BisedgeSideLogo";
import cookie from "js-cookie";

const SideBar = () => {
  const { setPageName, isAdmin } = useContext(globalContext);
  const location = useLocation();
  const activeUrl = location.pathname;
  const user = MapTokenToUser();
  const menuData = isAdmin ? adminNavbarData : sideBarData;
  const navigate = useNavigate();

  const handleLogOut = (event) => {
    event.preventDefault();
    cookie.remove("userToken");
    navigate("/");
    window.location.reload();
  };
  const [show, setShow] = useState(false);
  console.log("show", show);
  return (
    <>
      <StyledBox
        width="20%"
        minHeight="100vh"
        background={Theme.colors.primaryColor}
        // displayL={show ? "block" : "none"}
        positionL="fixed"
        zIndex="1000"
        widthL={show ? "40%" : 0}
        transition="all .1s"
        overFlowL="hidden"
      >
        <StyledDivFlex
          height="19rem"
          width="100%"
          alignItem="center"
          justifyContent="center"
        >
          <BisedgeSideLogo />
        </StyledDivFlex>

        <StyledUl>
          {menuData.map((item) => {
            return (
              <Link
                to={item.link}
                style={{
                  textDecoration: "none",
                  margin: "1rem 0",
                  display: "block",
                }}
              >
                <StyledList
                  key={item.id}
                  fontSize="calc(0.5rem + 0.82vw)"
                  fontWeight="400"
                  fontSizeM="1.5rem"
                  lineHeight="2rem"
                  padding="1rem 1% 1rem 30%"
                  paddingL="1rem 1rem 1rem 3vw"
                  color={
                    activeUrl === item.link
                      ? Theme.colors.primaryColor
                      : Theme.colors.secondaryColor
                  }
                  topLeftBorderRadius="3rem"
                  bottomLeftBorderRadius="3rem"
                  background={
                    activeUrl === item.link && Theme.colors.secondaryColor
                  }
                  onClick={() => {
                    setPageName(item.title);
                  }}
                >
                  {item.title}
                </StyledList>
              </Link>
            );
          })}
        </StyledUl>

        <Link to="/" style={{ textDecoration: "none" }}>
          <StyledDivFlex
            alignItems="center"
            padding="2rem 1rem 1rem 10.5rem"
            gap="1rem"
            cursor="pointer"
            marginBottom="2rem"
            onClick={handleLogOut}
            paddingS="2rem 1rem 1rem 2rem"
          >
            <LogOutIcon fontSizeS="small" />
            <StyledText fontSize="calc(1.1rem + 0.82vw)" fontWeight="500">
              Logout
            </StyledText>
          </StyledDivFlex>
        </Link>
      </StyledBox>
      <StyledDivFlex
        displayV="none"
        displayL="flex"
        position="fixed"
        Left="1.5rem"
        Top="1.5rem"
        zIndex="1500"
      >
        <MenuIcon
          fontSize="large"
          onClick={(event) => {
            // event.stopPropagation();
            setShow(!show);
          }}
          style={{ color: show ? "white" : Theme.colors.primaryColor }}
        />
      </StyledDivFlex>
    </>
  );
};

export default SideBar;
