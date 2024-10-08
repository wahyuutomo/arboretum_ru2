import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Dashboard from "../views/Dashboard/Dashboard";
import Arboretum from "../views/Arboretum/Arboretum";
import MangroveJambi from "../views/MangroveJambi/MangroveJambi";
import Poligowo from "../views/Poligowo/Poligowo";
import DaerahAliran from "../views/DaerahAliran/DaerahAliran";
import Sukajadi from "../views/Sukajadi/Sukajadi";
import LebahTanjungLeban from "../views/LebahTanjungLeban/LebahTanjungLeban";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/home" component={Dashboard} />
      <Route path="/arboretum" component={Arboretum} />
      <Route path="/mangrove-pangkalan-jambi" component={MangroveJambi} />
      <Route path="/poligowo" component={Poligowo} />
      <Route path="/konservasi-daerah-aliran" component={DaerahAliran} />
      <Route path="/sukajadi" component={Sukajadi} />
      <Route path="/lebah-tanjung-leban" component={LebahTanjungLeban} />
      <Redirect exact from="/" to="home" />
    </Switch>
  );
};

export default AppRoutes;

