import React from "react";
import "./style.scss";
import logo from "../../Assets/logo.svg";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
    <div className="container">
      <div className="col-3"></div>
      <div className="header">
        <div className="header__logo">
          <Link href="/" className="logo-link">
            <img className="logo" src={logo} alt="Logo Interno" />
            <span className="name">Interno</span>
          </Link>
        </div>
        <div className="header__navbar">
          <nav className="navbar__list">
            <NavLink to="/" className="navbar__item">
              Home
            </NavLink>
            <NavLink to="pages" className="navbar__item">
              Pages
            </NavLink>
            <NavLink to="services" className="navbar__item">
              Services
            </NavLink>
            <NavLink to="project" className="navbar__item">
              Project
            </NavLink>
            <NavLink to="blog" className="navbar__item">
              Blog
            </NavLink>
            <NavLink to="contact" className="navbar__item">
              Contact
            </NavLink>
          </nav>
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
        </div>
      </div>
      <div className="col-3"></div>
    </div>
  );
}

export default Header;
