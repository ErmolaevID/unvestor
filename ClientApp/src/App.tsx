import React from "react";
import { Route } from "react-router";
import { Navabar } from "./components/Navbar/Navbar";
import { Achievements } from "./pages/Achievements";
import { Companies } from "./pages/Companies";
import { Company } from "./pages/Company";
import { Dashboard } from "./pages/Dashboard";
import { Portfolio } from "./pages/Portfolio";

export const App: React.FC = () => {
  return (
    <Navabar>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/companies" component={Companies} />
      <Route exact path="/company/:ticker" component={Company} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/achievements" component={Achievements} />
    </Navabar>
  );
};
