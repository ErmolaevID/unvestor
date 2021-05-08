import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  font-weight: 400;
  font-size: 36px;
  margin-bottom: calc(51vh * (100 / 900));
  cursor: pointer;
  color: #1D1D1D;
  :hover {
    color: #D70C17;
    transition: 0.3s;
  }
`;