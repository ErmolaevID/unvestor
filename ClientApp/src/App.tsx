import React, { useEffect, useState } from "react";
import { Route } from "react-router";
import { PlayerDto } from "./common/Player.dto";
import { Navabar } from "./components/Navbar/Navbar";
import { useTools } from "./hooks/tools.hook";
import { Achievements } from "./pages/Achievements";
import { Companies } from "./pages/Companies";
import { Company } from "./pages/Company";
import { Dashboard } from "./pages/Dashboard";
import { Portfolio } from "./pages/Portfolio";
import { Recommendations } from "./pages/Recommendations";

export const App: React.FC = () => {
  const { req, api, routes } = useTools();
  const [playerData, setPlayerData] = useState<PlayerDto>();

  const loadData = () => {
    req<null, PlayerDto>({
      url: api.player,
    }).then((res) => setPlayerData(res));
  };

  useEffect(() => loadData(), []);

  return (
    <Navabar cash={playerData?.cash as number}>
      <Route exact path={routes.dashboard()} component={Dashboard} />
      <Route exact path={routes.companies()} component={Companies} />
      <Route
        exact
        path={routes.companyByTicker()}
        component={() => <Company handleAction={loadData} />}
      />
      <Route exact path={routes.potrfolio()} component={Portfolio} />
      <Route exact path={routes.achievements()} component={Achievements} />
      <Route
        exact
        path={routes.recommendations()}
        component={Recommendations}
      />
    </Navabar>
  );
};
