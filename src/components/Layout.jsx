import React from "react";
import { Outlet } from "react-router-dom"; /* The outlet creates a hole where the matching route can render */
import Header from "./Header"

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
