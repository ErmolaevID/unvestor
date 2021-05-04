import React from "react";
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
    <Wrapper>
      <div>{leftSide}</div>
      <div>{middleSide}</div>
      <div>{rightSide}</div>
    </Wrapper>
  );
};