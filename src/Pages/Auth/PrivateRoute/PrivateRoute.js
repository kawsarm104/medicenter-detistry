import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        // user.email ? ( email dile kam korto na karon facebook email dey na nam dey
        // tai private route a access e paito na
        user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
              }}
              
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
