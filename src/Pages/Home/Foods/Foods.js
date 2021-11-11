import React from "react";
import "./Foods.css";
import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Food from "../Food/Food";
const Foods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="my-4" id="foods">
      <Container>
        <h2 className="mb-3 fonts">
          <span className="text-danger">Popular</span>{" "}
          <span className="text-warning">Foods</span>
        </h2>
        <Row xs={1} lg={3} sm={1} md={3} className="g-4 ">
          {foods.map((food) => (
            <Food key={food._id} food={food}></Food>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Foods;
