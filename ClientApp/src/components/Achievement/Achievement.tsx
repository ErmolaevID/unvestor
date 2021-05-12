import React from "react";
import { AchievementDto } from "../../common/Achievement.dto";
import { Description, Title, Wrapper, WrapperText } from "./Achievements.styles";

interface Props {
  data: AchievementDto;
}

export const Achievement: React.FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      <svg width="30" height="30" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="34" cy="34" r="34" fill={data.isDone ? "green" : "#C4C4C4"}/>
      </svg>
      <WrapperText>
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
      </WrapperText>
    </Wrapper>
  );
};