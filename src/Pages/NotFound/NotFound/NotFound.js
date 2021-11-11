import React from "react";

const NotFound = () => {
  return (
    <div style={{ paddingTop: "150px" }}>
      <div className="text-center p-5">
        <h1>
          <span className="text-danger">404</span> Not Found
        </h1>
        <h3>Sorry, this page does not exist</h3>
        <small>
          (The link you clicked might be corrupted, or the page may have been
          removed)
        </small>
      </div>
    </div>
  );
};

export default NotFound;
