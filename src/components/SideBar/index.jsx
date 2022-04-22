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
  return (
    <StyledBox
      width="20%"
      minHeight="100vh"
      background={Theme.colors.primaryColor}
    >
      <StyledDivFlex
        height="19rem"
        width="100%"
        alignItem="center"
        justifyContent="center"
      >
        <StyledImage
          src="/assets/bisedge-sidelogo.svg"
          alt="bisede sidebar logo"
        />
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
                fontSize="1.8rem"
                fontWeight="400"
                lineHeight="2.7rem"
                padding="1rem 1rem 1rem 10.5rem"
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
        >
          <LogOutIcon />
          <StyledText fontSize="1.8rem" fontWeight="500">
            Logout
          </StyledText>
        </StyledDivFlex>
      </Link>
    </StyledBox>
  );
};

export default SideBar;
