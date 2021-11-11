import React from "react";
import "./Food.css";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Food = ({ food }) => {
  const { name, img, description } = food;
  return (
    <div>
      <Col>
        <Card
          style={{ maxHeight: "500px" }}
          className="border-0 p-2 shadow-lg rounded">
          <Card.Img className="img-fluid w-100" variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description.slice(0, 150)}</Card.Text>
            <Link to="/order">
              <Button variant="outline-warning">Order Now</Button>{" "}
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Food;
