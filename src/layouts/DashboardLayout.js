import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";

const DashboardLayout = () => {
  let activeStyle = {
    backgroundColor: "green",
  };

  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile mt-8">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="ml-8 drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-gray-100  min-h-screen">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                to="/dashboard"
              >
                My Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                to="/dashboard/addcategory"
              >
                Add Category
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                to="/dashboard/addproduct"
              >
                Add a product
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                to="/dashboard/myproducts"
              >
                My Products
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                to="/dashboard/allsellers"
              >
                All Sellers
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                to="/dashboard/allbuyers"
              >
                All Buyers
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
