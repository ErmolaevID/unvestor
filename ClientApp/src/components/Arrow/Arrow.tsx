import React from "react";

interface Props {
  direction: "left" | "right";
  clickHandler: () => void;
}

export const Arrow: React.FC<Props> = ({ direction, clickHandler }) => {
  return (
    <svg
      width="33"
      height="40"
      viewBox="0 0 33 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={clickHandler}
      style={{ cursor: "pointer" }}
    >
      <path d={direction === "right" ? "M33 20L0 39.0526L0 0.947441L33 20Z" : "M0 20L33 0.947441V39.0526L0 20Z"} fill="black" />
    </svg>
  );
};
