import React from "react";
import { Navigate } from "react-router-dom";

// PrivateRoute component để bảo vệ các route
const PrivateRoute = ({ element: Element, ...rest }) => {
  const email = localStorage.getItem("email");

  if (!email) {
    return <Navigate to="/" />;
  }

  return <Element {...rest} />;
};

export default PrivateRoute;
