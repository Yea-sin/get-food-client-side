import React from "react";
import "./Banner.css";
import { Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const Banner = () => {
  return (
    <div>
      <div className="banner-bg">
        <h4 className="text-warning fst-italic">do not miss it</h4>
        <h1>Pizza Tastes Better</h1>
        <h1>Than Skinny Feels</h1>
        <h2>
          <HashLink to="/home#foods">
            <Button variant="warning" className="rounded-pill px-5 py-2">
              Get It Now
            </Button>{" "}
          </HashLink>
        </h2>
        <img
          className="img-fluid w-50"
          src="https://i.ibb.co/PwscCFQ/pizza.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
