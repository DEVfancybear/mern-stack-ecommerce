import React, { Fragment } from "react";
import Navbar from "./components/Layout/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
      </Fragment>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
