import styled from "styled-components";
import { useProportions } from "../hooks/windowProportions.hook";

const { wHD, hHD } = useProportions();

export const Wrapper = styled.div`
  display: flex;
  width: calc(1140vw * ${wHD});
  flex-direction: column;
  justify-content: center;
`;