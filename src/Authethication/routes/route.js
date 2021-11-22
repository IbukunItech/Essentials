import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "../component/signIn";
import SignUp from "../component/signUp";
import Homepage from "./homepage";
import NavBar from "./navbar";
import { useAuthContext } from "../hooks/useAuthContext";
import Main from "../../Mayowa/main";
import AutoDetails from "../../Mayowa/AutoDetails";
import EventDetails from "../../Mayowa/EventDetails";
import FashionDetails from "../../Mayowa/FashionDetails";
import MaintenanceDetails from "../../Mayowa/MaintenanceDetails";

const Routes = () => {
  const { authIsReady } = useAuthContext();
  return (
    <div>
      {authIsReady && (
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/login" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/detail" exact component={Main} />
            <Route path="/fashion" exact component={FashionDetails} />
            <Route path="/events" exact component={EventDetails} />
            <Route path="/autos" exact component={AutoDetails} />
            <Route path="/maintenance" exact component={MaintenanceDetails} />
          </Switch>
        </Router>
      )}
    </div>
  );
};

export default Routes;
