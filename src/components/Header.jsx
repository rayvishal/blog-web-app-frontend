import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav
      style={{
        padding: "20px",
        backgroundColor: "#265728",
      }}
      className="navbar navbar-expand-lg navbar-light bg-green"
    >
      <Link to={"/"} className="navbar-brand" href="#">
        <p style={{ fontWeight: "bold", color: "white" }}>Blog.com</p>
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
          <NavLink to="/" className="nav-item nav-link active mr-3" href="#">
            {" "}
            <p style={{ fontWeight: "bold", color: "white" }}>Home</p>
          </NavLink>
          <NavLink to="createblog" className="nav-item nav-link mr-3" href="#">
            <p style={{ fontWeight: "bold", color: "white" }}>Create Blog</p>
          </NavLink>
          <NavLink to="allblogs" href="#" className="nav-item nav-link mr-3">
            <p style={{ fontWeight: "bold", color: "white" }}>All blogs</p>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Header;
