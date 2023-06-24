import React from "react";
import { Outlet } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";

const AdminLayout = () => {
  return (
    <section className="flex flex-row">
      <AdminSideBar />
      <Outlet />
    </section>
  );
};

export default AdminLayout;
