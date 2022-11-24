import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  
  return (
    <div className="mt-8">
      <footer className="bg-gray-50 text-center lg:text-left">
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
      </footer>
    </div>
  );
};

export default Footer;
