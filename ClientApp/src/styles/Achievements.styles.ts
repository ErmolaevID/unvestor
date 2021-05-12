import styled from "styled-components";
import { useProportions } from "../hooks/windowProportions.hook";

const { wHD } = useProportions();

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(1140vw * ${wHD});
  background-color: #E7F3FD;
`;