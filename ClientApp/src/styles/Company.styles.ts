import styled from "styled-components";
import { useProportions } from "../hooks/windowProportions.hook";

const { wHD, hHD } = useProportions();

export const Wrapper = styled.div`
  background-color: #000000;
  width: calc(1140vw * ${wHD});
  display: flex;
  flex-direction: column;
`;

export const CompanyTitle = styled.div`
  font-size: 52px;
  font-weight: 400;
  color: #fff;
  margin-top: calc(70vh * ${hHD});
  margin-left: calc(70vw * ${wHD});
`;

export const CompanyTicker = styled(CompanyTitle)`
  font-size: 25px;
  font-weight: 500;
  margin-top: calc(8vh * ${hHD});
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
  width: calc(994vw * ${wHD});
  height: calc(580vh * ${hHD});
  background-color: white;
  margin-top: calc(20vh * ${hHD});
`;

export const Chart = styled.div`
  margin-top: calc(18vh * ${hHD});
`;

export const Buttons = styled.div`
  display: flex;
  height: calc(134vh * ${hHD});
`;

export const BuyButton = styled.button`
  width: calc(398vw * ${wHD});
  height: 100%;
  background-color: #64BE50;
  border: 0;
  font-size: 30px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
`;

export const SellButton = styled(BuyButton)`
  background-color: #D70C17;
`;

export const CounterWrapper = styled.button`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(198vw * ${wHD});
  background-color: #EBEBEB;
  border: 0;
`;

export const Counter = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #000000;
  padding: 0px 40px;
`;