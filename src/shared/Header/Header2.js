import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../contexts/AuthProvider";

const Header2 = () => {
  const [navbar, setNavbar] = useState(false);
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire("User Logged Out successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt=""
                className="w-8 h-8 lg:w-12 lg:h-12 rounded"
              />
              <Link
                to="/"
                className="font-extrabold text-transparent text-xl lg:text-3xl bg-clip-text bg-gradient-to-r from-green-400 to-gray-700"
              >
                ANTIQUE MARKET
              </Link>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/home">
                  <button className="btn btn-outline btn-primary">Home</button>
                </Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/blog">
                  <button className="btn btn-outline btn-primary">Blog</button>
                </Link>
              </li>
              {/* <PrimaryButton>Register</PrimaryButton> */}
              {user ? (
                <>
                  <p>{user?.email}</p>
                  <Link to="/dashboard">
                    <button className="btn btn-outline btn-primary">
                      Dashboard
                    </button>
                  </Link>

                  <Link onClick={handleSignOut}>
                    <button className="btn btn-outline btn-primary">
                      Logout
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="login">
                    <button className="btn btn-outline btn-primary">
                      Login
                    </button>
                  </Link>
                  <Link to="register">
                    <button className="btn btn-outline btn-primary">
                      Register
                    </button>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header2;
