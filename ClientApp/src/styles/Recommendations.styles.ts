import styled from "styled-components";
import { useProportions } from "../hooks/windowProportions.hook";

const { wHD, hHD } = useProportions();

export const Wrapper = styled.div`
  width: calc(1140vw * ${wHD});
  background-color: #E7F3FD;
`;

export const Title = styled.div`
  margin-top: calc(70vh * ${wHD});
  font-size: 25px;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  margin-top: calc(100vh * ${wHD});
`;