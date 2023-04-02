import React from "react";
import "./style.scss";
import logo from "../../Assets/logo.svg";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="col-3"></div>
        <div className="footer__content">
          <div className="footer__logo col-6">
            <Link href="/" className="logo-link">
              <img className="logo" src={logo} alt="Logo Interno" />
              <span className="name">Interno</span>
            </Link>
            <p>
              It is a long established fact that a reader will be distracted
              lookings.
            </p>
            <div className="media__icon-list">
              <a href="/" className="icon-link">
                <FacebookIcon className="icon" />
              </a>
              <a href="/" className="icon-link">
                <TwitterIcon className="icon" />
              </a>
              <a href="/" className="icon-link">
                <LinkedInIcon className="icon" />
              </a>
              <a href="/" className="icon-link">
                <InstagramIcon className="icon" />
              </a>
            </div>
          </div>
          <div className="pages col-4">
            <h4>Pages</h4>
            <ul className="list">
              <li className="item">
                <a href="/">About Us</a>
              </li>
              <li className="item">
                <a href="/">Our Projects</a>
              </li>
              <li className="item">
                <a href="/">Our Team</a>
              </li>
              <li className="item">
                <a href="/">Contact Us</a>
              </li>
              <li className="item">
                <a href="/">Services</a>
              </li>
            </ul>
          </div>
          <div className="services col-4">
            <h4>Services</h4>
            <ul className="list">
              <li className="item">
                <a href="/">Kitchan</a>
              </li>
              <li className="item">
                <a href="/">Living Area</a>
              </li>
              <li className="item">
                <a href="/">Bathroom</a>
              </li>
              <li className="item">
                <a href="/">Dinning Hall</a>
              </li>
              <li className="item">
                <a href="/">Bedroom</a>
              </li>
            </ul>
          </div>
          <div className="contact col-4">
            <h4>Contact</h4>
            <ul className="list">
              <li className="item">
                <a href="/">55 East Birchwood Ave. Brooklyn, New York 11201</a>
              </li>
              <li className="item">
                <a href="/">contact@interno.com</a>
              </li>
              <li className="item">
                <a href="/">(123) 456 - 7890</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="copy-right">
        <span>
          Copyright © Interno | Designed by Victorflow Templates - Powered by
          Webflow
        </span>
      </div>
    </div>
  );
}

export default Footer;
