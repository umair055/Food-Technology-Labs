import React from "react";

export default function NavComponent() {
  return (
    <nav className="navContainer">
      <div id="navbar">
        <h2 style={{ color: "#fff" }}>Logo</h2>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div id="mobile">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}
