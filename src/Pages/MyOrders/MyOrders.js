import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");
          const remainingServices = orders.filter((order) => order._id !== id);
          setOrders(remainingServices);
        }
      });
  };

  return (
    <div className="top-margin">
      <h2 className="mb-5 fonts">
        <span className="text-danger">My</span>{" "}
        <span className="text-warning">Orders</span>
      </h2>
      <div>
        {orders.map((order) => (
          <div
            key={order._id}
            className="border border-3 border-danger rounded m-4 p-4">
            <img
              src={order.order.img}
              style={{ maxWidth: "300px" }}
              className=" mb-4 rounded-circle"
              alt=""
            />
            <h4 className="text-danger">{order.order.name}</h4>
            <div className="border border-2 p-3">
              <small className="border border-5 text-success">
                User Details
              </small>
              <h3 className="fst-italic">
                <span className="text-secondary">Name</span> : {order.fullName}
              </h3>
              <h5>
                <span className="text-secondary">Email</span> : {order.email}
              </h5>
              <h5 className="text-primary">Address : {order.address}</h5>
              <h2>
                <Button
                  onClick={() => handleDelete(order._id)}
                  variant="outline-danger">
                  Delete
                </Button>{" "}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
