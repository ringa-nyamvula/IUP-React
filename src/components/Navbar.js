// src/components/Navbar.js
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      className="container-fluid"
      style={{
        textAlign: "right",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <nav
        className="navbar navbar-expand-lg  navbar-light bg-light"
        style={{
          marginTop: "10px",
          padding: "15px 10px",
          textAlign: "right",
        }}
      >
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{ textAlign: "right" }}
        >
          <ul
            className="navbar-nav "
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <li
              className="nav-item"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Link to="/landing" className="nav-link">
                Landing Page
              </Link>
            </li>
            <li
              className="nav-item"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li
              className="nav-item"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li
              className="nav-item"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Link to="/manifesto" className="nav-link">
                Manifesto
              </Link>
            </li>
            <li
              className="nav-item"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Link to="/strategies" className="nav-link">
                Strategies
              </Link>
            </li>
            <li
              className="nav-item"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Link to="/implementation" className="nav-link">
                Implementation
              </Link>
            </li>
            <li
              className="nav-item"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;