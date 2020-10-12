import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Features from "./pages/Features";
export default function Routes() {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/features">
        <Features />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
