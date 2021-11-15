import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "../component/signIn";
import SignUp from "../component/signUp";
import Homepage from "./homepage";
import NavBar from "./navbar";
import { AuthProvider } from "../context/AuthProvider";
import { useAuthContext } from "../hooks/useAuthContext";

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
          </Switch>
        </Router>
      )}
    </div>
  );
};

export default Routes;
