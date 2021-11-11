import React, { useEffect, useState } from "react";
import "./PlaceOrder.css";
import { useForm } from "react-hook-form";
import { Button, Container } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { useParams } from "react-router";

const PlaceOrder = () => {
  const { user } = useAuth();
  const { orderId } = useParams();
  const { register, handleSubmit, reset } = useForm();

  const [food, setFood] = useState({});
  useEffect(() => {
    const url = `https://thawing-basin-06378.herokuapp.com/foods/${orderId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);
  let orderedFood = food;
  const onSubmit = (data) => {
    data.order = orderedFood;
    axios
      .post("https://thawing-basin-06378.herokuapp.com/orders", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully Submitted");
          reset();
        }
      });
  };

  return (
    <Container className="top-margin">
      <div className="row justify-content-center">
        <div className="col-md-5 mt-5">
          <h3 className="text-warning mb-5">{food.name}</h3>
          <img src={food.img} style={{ maxWidth: "300px" }} alt="" />
        </div>
        <div className="order-form border border-2 p-5 col-md-7 my-5">
          <h5 className="mb-4">
            Your <span className="text-warning">Delivery</span> Details
          </h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              defaultValue={user.displayName}
              placeholder="Full Name"
              {...register("fullName")}
            />
            <input
              defaultValue={user.email}
              placeholder="Email"
              {...register("email")}
            />
            <input
              required
              type="number"
              placeholder="quantity"
              {...register("quantity")}
            />
            <textarea required placeholder="address" {...register("address")} />
            <input
              required
              placeholder="Phone"
              type="number"
              {...register("phone")}
            />
            <Button variant="outline-success" type="submit">
              Submit
            </Button>{" "}
          </form>
        </div>
      </div>
    </Container>
  );
};

export default PlaceOrder;
