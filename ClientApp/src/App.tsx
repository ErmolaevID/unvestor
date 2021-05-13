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

export const App: React.FC = () => {
  const req = useHttp();
  const routes = useAPIs();
  const [player, setPlayer] = useState<PlayerDto>();

  useEffect(() => {
    req<null, PlayerDto>({
      url: routes.player,
    }).then((res) => setPlayer(res));
  }, [req]);

  return (
    <Navabar cash={player?.cash as number}>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/companies" component={Companies} />
      <Route exact path="/company/:ticker" component={Company} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/achievements" component={Achievements} />
    </Navabar>
  );
};
