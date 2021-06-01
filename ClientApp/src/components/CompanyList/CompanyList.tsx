import React from "react";
import { NavLink } from "react-router-dom";
import { Wrapper } from "./CompanyList.styles";

export interface Props {
  left: string | number;
  middle: string | number;
  right: string | number;
  link?: string;
}

export const CompanyList: React.FC<Props> = ({
  left,
  middle,
  right,
  link = left,
}) => {
  return (
    <NavLink to={`/company/${link}`} style={{ textDecoration: "none" }}>
      <Wrapper>
        <div>{left}</div>
        <div>{middle}</div>
        <div>{right}</div>
      </Wrapper>
    </NavLink>
  );
};
