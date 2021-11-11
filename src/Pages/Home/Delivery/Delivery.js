import React from "react";
import { Container } from "react-bootstrap";

const Delivery = () => {
  return (
    <div>
      <Container>
        <div className="d-flex align-items-center justify-content-center my-4">
          <div>
            <h3>
              The Fastest <span className="text-warning">Delivery Service</span>
            </h3>
          </div>
          <div>
            <img
              src="https://i.ibb.co/SXJC3Mt/delivary.png"
              className="img-fluid w-75"
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Delivery;
