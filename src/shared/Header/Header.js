import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 items-center gap-2">
        <img src={logo} alt="" className="w-12 h-12 rounded" /> 
        <Link to='/' className="font-extrabold text-transparent text-2xl lg:text-3xl bg-clip-text bg-gradient-to-r from-green-400 to-gray-700">ANTIQUE MARKET</Link>
      </div>
      <div className="flex-none gap-2">
        {/* <PrimaryButton>Register</PrimaryButton> */}
      <button className="btn btn-outline btn-primary">Login</button>

        {/* <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link>Logout</Link>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
