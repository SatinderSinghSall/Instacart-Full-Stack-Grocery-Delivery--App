import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <p>Side Banner</p>
      <p>Navbar</p>

      <main className="min-h-screen">
        <Outlet />
      </main>

      <p>Footer</p>
      <p>Cart Sidebar</p>
    </>
  );
};

export default AppLayout;
