import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/index";
import Favoritas from "./Components/Favoritas/index";
import Cervejas from "./Components/Cervejas/index";
import Somos from "./Components/Somos/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/favoritas" component={Favoritas} />
      <Route path="/cervejas" component={Cervejas} />
      <Route path="/somos" component={Somos} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
