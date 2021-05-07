import React from "react";
import { NavLink } from "react-router-dom";
import { Wrapper } from "./CompanyList.styles";

export interface Props {
  leftSide: any;
  middleSide: any;
  rightSide: any;
}

export const CompanyList: React.FC<Props> = ({
  leftSide,
  middleSide,
  rightSide,
}) => {
  return (
    <NavLink to={`/company/${rightSide}`} style={{ textDecoration: "none" }}>
      <Wrapper>
        <div>{leftSide}</div>
        <div>{middleSide}</div>
        <div>{rightSide}</div>
      </Wrapper>
    </NavLink>
  );
};
