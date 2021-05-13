import React from "react";
import { NavLink } from "react-router-dom";
import { NavbarElement, Wrapper } from "./Navbar.styles";

interface Props {
  children: React.ReactNode;
  cash: number;
}

export const Navabar: React.FC<Props> = ({ children, cash }) => {
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
        <NavLink to="/portfolio" style={{ textDecoration: "none" }}>
          <NavbarElement>Cash: ${cash}</NavbarElement>
        </NavLink>
      </Wrapper>
      {children}
    </>
  );
};
