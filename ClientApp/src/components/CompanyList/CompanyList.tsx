import React from "react";
import { NavLink } from "react-router-dom";
import { Wrapper } from "./CompanyList.styles";

export interface Props {
  title: string;
  price: number;
  ticker: string;
}

export const CompanyList: React.FC<Props> = ({
  title,
  price,
  ticker,
}) => {
  return (
    <NavLink to={`/company/${ticker}`} style={{ textDecoration: "none" }}>
      <Wrapper>
        <div>{title}</div>
        <div>{price}</div>
        <div>{ticker}</div>
      </Wrapper>
    </NavLink>
  );
};
