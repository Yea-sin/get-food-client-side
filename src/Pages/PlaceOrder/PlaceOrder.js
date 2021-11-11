import React from "react";
import "./PlaceOrder.css";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";

const Order = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);

    axios.post("http://localhost:5000/orders", data).then((res) => {
      console.log(res);
      if (res.data.insertedId) {
        alert("Successfully Submitted");
        reset();
      }
    });
  };

  return (
    <div className="top-margin">
      <div className="order-form my-5">
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
  );
};

export default Order;
