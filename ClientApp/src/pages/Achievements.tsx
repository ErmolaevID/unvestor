import React, { useEffect, useState } from "react";
import { AchievementDto } from "../common/Achievement.dto";
import { Achievement } from "../components/Achievement/Achievement";
import { useAPIs } from "../hooks/apis.hook";
import { useHttp } from "../hooks/http.hook";
import { Wrapper } from "../styles/Achievements.styles";

export const Achievements: React.FC = () => {
  const [req, routes] = [useHttp(), useAPIs()];
  const [data, setData] = useState<AchievementDto[]>([]);

  useEffect(() => {
    req<null, AchievementDto[]>({
      url: routes.allAchievements,
    }).then((el) => setData(el));
  }, []);

  return (
    <Wrapper>
      {data.map((el) => (
        <Achievement data={el} />
      ))}
    </Wrapper>
  );
};
