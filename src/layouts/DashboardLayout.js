import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";
import Header from "../shared/Header/Header";

const DashboardLayout = () => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  console.log(user, isAdmin);
  let activeStyle = {
    textDecoration: "underline",
  };

  if (loading || isAdminLoading || isSellerLoading) {
    <Spinner></Spinner>;
  }
  return (
    <div>
      <Header></Header>

      {/* Dashboard drawer icon  */}
      <label
        tabIndex={1}
        htmlFor="dashboard-drawer"
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>

      <div className="drawer drawer-mobile mt-8">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="ml-8 drawer-content min-h-screen">
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
                to="/dashboard/myorders"
              >
                My Orders
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                to="/dashboard/wishlist"
              >
                My WishList
              </NavLink>
            </li>
            {isAdmin && (
              <>
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
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="/dashboard/reportedItems"
                  >
                    Reported Items
                  </NavLink>
                </li>
              </>
            )}

            {isSeller && (
              <>
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
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
