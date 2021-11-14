import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const ManageItems = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://thawing-basin-06378.herokuapp.com/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://thawing-basin-06378.herokuapp.com/foods/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");
          const remainingServices = foods.filter((food) => food._id !== id);
          setFoods(remainingServices);
        }
      });
  };

  return (
    <div className="top-margin">
      <small className="text-danger">{foods.length}</small>
      <h2 className="mb-5 fonts">
        <span className="text-danger">Manage</span>{" "}
        <span className="text-warning">Foods</span>
      </h2>
      <div>
        {foods.map((food) => (
          <div
            key={food._id}
            className="d-flex justify-content-center align-items-center">
            <div>
              <img
                src={food.img}
                style={{ width: "150px", borderRadius: "50px" }}
                className=" mb-4"
                alt=""
              />
              <h3 className="text-danger mb-5 me-4">{food.name}</h3>
            </div>
            <h2>
              <Button
                onClick={() => handleDelete(food._id)}
                variant="outline-danger">
                Delete
              </Button>{" "}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageItems;
