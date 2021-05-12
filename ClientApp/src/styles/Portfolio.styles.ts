import styled from "styled-components";
import { useProportions } from "../hooks/windowProportions.hook";

const { hHD, wHD } = useProportions();

export const Wrapper = styled.div`
  width: calc(1140vw * ${wHD});
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #000;
  height: calc(300vh * ${hHD});
`;

export const InfoBoxElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoBoxTitle = styled.div`
  font-size: 30px;
  font-weight: 300;
  color: #ffffff;
`;

export const InfoBoxValue = styled.div`
  font-size: 50px;
  font-weight: 400;
  color: #ffffff;
`;

export const StocksBox = styled.div`
  background-color: #E7F3FD;
  height: 100%;
`;