import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect } from "react-router";
import { Route } from "react-router";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <Spinner className="top-margin" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}></Redirect>
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
