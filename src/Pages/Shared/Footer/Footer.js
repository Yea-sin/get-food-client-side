import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="footer p-5 bg-dark text-light">
        <Container>
          <div className="d-flex justify-content-between">
            <div>&copy;all rights are reserved</div>
            <div className="d-flex icons">
              <NavLink style={{ color: "#4064AC" }} to="/facebook">
                <h2>
                  <BsFacebook />
                </h2>
              </NavLink>
              <NavLink style={{ color: "#b12704" }} to="/instagram">
                <h2>
                  <BsInstagram />
                </h2>
              </NavLink>
              <NavLink style={{ color: "#1C9CEA" }} to="/twitter">
                <h2>
                  <BsTwitter />
                </h2>
              </NavLink>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
