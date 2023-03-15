import React from "react";
import MainLayout from "./MainLayout";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div>
      <MainLayout />
      <main className="main">{children}</main>
    </div>
  );
}

export default Layout;
