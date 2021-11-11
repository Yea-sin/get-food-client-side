import React from "react";
import "./Food.css";
import { Button, Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";

const Food = ({ food }) => {
  const { name, img, description, _id } = food;
  const history = useHistory();
  const handleOrder = (id) => {
    history.push(`/order/${id}`);
  };
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
            <Button onClick={() => handleOrder(_id)} variant="outline-warning">
              Order Now
            </Button>{" "}
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Food;
