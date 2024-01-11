import React from "react";
// import Link from "next/link";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      style={{ padding: "20px" }}
      className="navbar navbar-expand-lg navbar-light bg-light"
    >
      <Link to={"/"} className="navbar-brand" href="#">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link active mr-3" href="#">
            {" "}
            Home
          </Link>
          <Link to="createblog" className="nav-item nav-link mr-3" href="#">
            Create Blog
          </Link>
          <Link to="allblogs" href="#" className="nav-item nav-link mr-3">
            All blogs
          </Link>
          {/* <a className="nav-item nav-link disabled" href="#">
            Disabled
          </a> */}
        </div>
      </div>
    </nav>
  );
};
export default Header;
