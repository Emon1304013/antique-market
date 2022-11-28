import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();

  return (
    <div className="mt-8">
      {/* <footer className="bg-gray-50 text-center lg:text-left">
        <div
          className="text-gray-700 text-center p-4"
        >
          <p>© {fullYear} Copyright:</p>
            <Link
              to="/"
              className="font-extrabold text-transparent text-2xl lg:text-3xl bg-clip-text bg-gradient-to-r from-green-400 to-gray-700"
            >
              ANTIQUE MARKET
            </Link>
        </div>
      </footer> */}

      <footer className="px-4 py-8">
        <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0 shadow p-8">
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <div className="flex items-center justify-center">
            <p>© {fullYear} Copyright</p>
            <Link
              to="/"
              className="ml-8 font-extrabold text-transparent text-2xl lg:text-3xl bg-clip-text bg-gradient-to-r from-green-400 to-gray-700"
            >
              ANTIQUE MARKET
            </Link>
            </div>
          </div>
          <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/blogs'>Blogs</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
