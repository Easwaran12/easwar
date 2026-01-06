import React from "react";
import "./Header.css";
import logo from "../assets/college-logo.png"; // your logo path

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="College Logo" className="logo" />
      </div>

      <div className="header-right">
        <h1>THANTHAI PERIYAR ARTS & SCIENCE COLLEGE (Autonomous)</h1>
        <p>Tiruchirappalli – 620 003, Tamil Nadu,India.</p>
      </div>
    </header>
  );
}

export default Header;
