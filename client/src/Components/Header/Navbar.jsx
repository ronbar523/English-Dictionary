import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div
      className=" navbar navbar-expand-md navbar-dark"
      aria-label="Fourth navbar example"
    >
      <div className="container-fluid ms-4 text-sm-center text-md-center bg-myColor z-position">
        <Logo />
        <button
          className="navbar-toggler collapsed mt-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#hamburger"
          aria-controls="hamburger"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse" id="hamburger">
          <ul className="navbar-nav me-auto ms-lg-5 ms-xl-5  mb-2 mb-md-0 fs-5 myNavbar">
            <li className="li-nav">
              <NavLink className="line" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
