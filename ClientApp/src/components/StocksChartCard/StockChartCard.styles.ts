import styled from "styled-components";
import { useProportions } from "../../hooks/windowProportions.hook";

const { wHD, hHD } = useProportions();

export const Wrapper = styled.div`
  width: calc(994vw * ${wHD});
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: calc(60vh * ${hHD});
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 30px;
  margin-bottom: calc(45vh * ${hHD});
`;  