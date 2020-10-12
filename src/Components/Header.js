import React from "react";
import Tab from "./Tab";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
export default function Header() {
  return (
    <div className="tabs">
      <Tab>
        <Link to="/">Home</Link>
      </Tab>
      <Tab>
        <Link to="/about">About</Link>
      </Tab>
      <Tab>
        <Link to="/features">Features</Link>
      </Tab>
    </div>
  );
}
