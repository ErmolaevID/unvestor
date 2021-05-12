import React from "react";
import { NavLink } from "react-router-dom";
import { NavbarElement, Wrapper } from "./Navbar.styles";
// import { AppIcon } from "../Icons/AppIcon";
// import { CompaniesIcon } from "../Icons/CompaniesIcon";
// import { DashboardIcon } from "../Icons/DashboardIcon";
// import { InvestorsIcon } from "../Icons/InvestorsIcon";
// import { PortfolioIcon } from "../Icons/PortfolioIcon";
// import { Menu, Wrapper } from "./Navbar.Styles";

export const Navabar: React.FC = ({ children }) => {
  return (
    <>
      <Wrapper>
        <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
          <NavbarElement>Dashboard</NavbarElement>
        </NavLink>
        <NavLink to="/portfolio" style={{ textDecoration: "none" }}>
          <NavbarElement>Portfolio</NavbarElement>
        </NavLink>
        <NavLink to="/companies" style={{ textDecoration: "none" }}>
          <NavbarElement>Companies</NavbarElement>
        </NavLink>
        <NavLink to="/achievements" style={{ textDecoration: "none" }}>
          <NavbarElement>Achievement</NavbarElement>
        </NavLink>
      </Wrapper>
      {children}
    </>
  );
};
