import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <Header />
          <div className="viewport">
            <Routes />
          </div>
        </div>
      </div>
    </Router>
  );
}
