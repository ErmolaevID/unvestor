import styled from "styled-components";
import { useProportions } from "../hooks/windowProportions.hook";

const { hHD } = useProportions();

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: calc(30vh * ${hHD});
`;