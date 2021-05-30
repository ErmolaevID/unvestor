import React, { useEffect, useState } from "react";
import { Route } from "react-router";
import { PlayerDto } from "./common/Player.dto";
import { Navabar } from "./components/Navbar/Navbar";
import { useAPIs } from "./hooks/apis.hook";
import { useHttp } from "./hooks/http.hook";
import { Achievements } from "./pages/Achievements";
import { Companies } from "./pages/Companies";
import { Company } from "./pages/Company";
import { Dashboard } from "./pages/Dashboard";
import { Portfolio } from "./pages/Portfolio";
import { Recommendations } from "./pages/Recommendations";

export const App: React.FC = () => {
  const req = useHttp();
  const routes = useAPIs();
  const [playerData, setPlayerData] = useState<PlayerDto>();

  const loadData = () => {
    req<null, PlayerDto>({
      url: routes.player,
    }).then((res) => setPlayerData(res));
  };

  useEffect(() => loadData(), []);

  return (
    <Navabar cash={playerData?.cash as number}>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/companies" component={Companies} />
      <Route exact path="/company/:ticker" component={() => <Company handleAction={loadData} />} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/achievements" component={Achievements} />
      <Route exact path="/recommendations" component={Recommendations} />
    </Navabar>
  );
};
