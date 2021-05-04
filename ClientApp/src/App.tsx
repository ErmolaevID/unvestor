import React from "react";
import { Route } from "react-router";
import IMG from "./components/Icons/PortfolioIcon.svg";
import { Navabar } from "./components/Navbar/Navbar";
import { NavbarIcon } from "./components/NavbarIcon/NavbarIcon";
import { Companies } from "./pages/Companies";
import { Dashboard } from "./pages/Dashboard";

export const App: React.FC = () => {
  return (
    <Navabar>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/companies" component={Companies} />
    </Navabar>
  );
};
