import styled from "styled-components";

const widthRate = 100 / 1440;
const heightRate = 100 / 900;

export const Wrapper = styled.div`
  height: 100vh;
  width: calc(300vw * ${widthRate});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavbarElement = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #1D1D1D;
  cursor: pointer;
  :hover {
    transition: 0.3s;
    color: #D70C17;
  }
`;