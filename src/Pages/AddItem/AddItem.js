import React from "react";
import "./AddItem.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/foods", data).then((res) => {
      console.log(res);
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };
  return (
    <div className="top-margin">
      <h2>This is Add User</h2>
      <div className="add-service">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Name"
            {...register("name", { required: true, maxLength: 20 })}
          />
          <textarea placeholder="Description" {...register("description")} />
          <input placeholder="Image URL" {...register("img")} />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
