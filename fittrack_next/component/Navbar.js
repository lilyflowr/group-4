import React from "react";
import Logo from "@public/Images/Logo.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white ">
      
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img width="60px" src={Logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/">
                  <strong className="home1"> Home</strong>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="Blog"
                >
                  <strong className="home1"> Blog</strong>
                </Link>
              </li>

              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="About"
                >
                  <strong className="home1">About</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="Contact"
                >
                  <strong className="home1"> Contact</strong>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="signIn">
                  <button className="signInButton">Sign In</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="signUp">
                  <button className="button">Sign Up</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;