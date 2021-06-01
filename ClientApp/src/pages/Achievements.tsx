import React, { useEffect, useState } from "react";
import { AchievementDto } from "../common/Achievement.dto";
import { Achievement } from "../components/Achievement/Achievement";
import { useTools } from "../hooks/tools.hook";
import { Wrapper } from "../styles/Achievements.styles";

export const Achievements: React.FC = () => {
  const { req, api } = useTools();
  const [data, setData] = useState<AchievementDto[]>([]);

  useEffect(() => {
    req<null, AchievementDto[]>({
      url: api.allAchievements,
    }).then((el) => setData(el));
  }, []);

  return (
    <Wrapper>
      <ul style={{ listStyleType: "none" }}>
        {data.map((el) => (
          <li>
            <Achievement data={el} />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
