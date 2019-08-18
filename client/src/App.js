import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NavigationBar from "./components/NavigationBar";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  let [triggerNav, setTriggerNav] = useState(false);

  // function refresh() {
  //   setRefreshNav(refreshNav + 1);
  //   console.log(refreshNav, "counter");
  // }

  function navigationBar() {
    // console.log(localStorage.getItem("accessToken"), "runs");
    if (localStorage.getItem("accessToken") != null) {
      setTriggerNav(true);
    }
  }

  // useEffect(() => {
  //   refreshBar();
  // }, );

  useEffect(() => {
    navigationBar();
  });

  return (
    <div className="App backgroundColor">
      <BrowserRouter>
        <NavigationBar triggerNav={triggerNav} />

        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
