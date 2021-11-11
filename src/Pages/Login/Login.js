import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { user, singInUsingGoogle, logOut, error } = useAuth();
  console.log(user);
  const location = useLocation();
  const history = useHistory();
  const redirect = location.state?.from || "/";
  const handleLogIn = () => {
    singInUsingGoogle().then((result) => {
      history.push(redirect);
    });
  };
  return (
    <div className="top-margin">
      <h2 className="my-5">
        {user.displayName ? (
          <div>
            <Button
              onClick={logOut}
              variant="warning"
              className="rounded-pill btn-lg px-5 py-2">
              Log Out
            </Button>{" "}
            <p>{user.displayName}</p>
            <p>{error}</p>
          </div>
        ) : (
          <div>
            <Button
              onClick={handleLogIn}
              variant="warning"
              className="rounded-pill btn-lg px-5 py-2">
              Login With Google
            </Button>{" "}
            <p>{error}</p>
          </div>
        )}
      </h2>
      <div className="mb-4">
        <Link className="links-decoration mb-4" to="/register">
          Don't have an account?
        </Link>
      </div>
    </div>
  );
};

export default Login;
