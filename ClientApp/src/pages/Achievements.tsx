import React, { useEffect, useState } from "react";
import { AchievementDto } from "../common/Achievement.dto";
import { Achievement } from "../components/Achievement/Achievement";
import { useHttp } from "../hooks/http.hook";
import { Wrapper } from "../styles/Achievements.styles";

export const Achievements = () => {
  const req = useHttp();
  const [data, setData] = useState<AchievementDto[]>([]);

  useEffect(() => {
    req<null, AchievementDto[]>({
      url: "/ach/achievements"
    }).then(el => setData(el));
  }, []);

  return (
    <Wrapper>
      {data.map(el => <Achievement data={el} />)}
    </Wrapper>
  );
};