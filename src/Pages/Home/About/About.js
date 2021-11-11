import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div className="my-5" id="about">
      {/* <div className="d-md-flex align-items-center justify-content-center"> */}
      <Container>
        <Row
          className="align-items-center justify-content-center"
          md={2}
          sm={1}
          xs={1}>
          <Col>
            <div>
              <img
                src="https://i.ibb.co/rkk4chj/about.png"
                className="img-fluid "
                alt=""
              />
            </div>
          </Col>
          <Col>
            <div>
              <h5 className="text-danger fst-italic">why you choose us</h5>
              <h2>Why we are the best</h2>
              <div>
                <Container>
                  <Row
                    className="align-items-center p-5 justify-content-center gy-3"
                    md={2}>
                    <Col>
                      <span className="text-warning">Fresh</span> Food
                    </Col>
                    <Col>
                      Fast <span className="text-warning">Delivery</span>
                    </Col>
                    <Col>
                      {" "}
                      <span className="text-warning">Quality</span> Maintain
                    </Col>
                    <Col>
                      24/7 <span className="text-warning">Service</span>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* </div> */}
    </div>
  );
};

export default About;
