import React from "react";
import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  return (
      <Outlet />
  );
};

export default ProtectedRoute;
