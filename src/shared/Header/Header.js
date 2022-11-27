import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../assets/logo.png";
// import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
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
    <div className="navbar bg-base-100">
      <div className="flex-1 items-center gap-2">
        <img src={logo} alt="" className="w-8 h-8 lg:w-12 lg:h-12 rounded" />
        <Link
          to="/"
          className="font-extrabold text-transparent text-xl lg:text-3xl bg-clip-text bg-gradient-to-r from-green-400 to-gray-700"
        >
          ANTIQUE MARKET
        </Link>
      </div>
      <div className="flex-none gap-2">
        <Link to="/blog">
          <button className="btn btn-outline btn-primary">Blog</button>
        </Link>
        {/* <PrimaryButton>Register</PrimaryButton> */}
        {user ? (
          <>
            <p>{user?.email}</p>
            <Link to="/dashboard">
              <button className="btn btn-outline btn-primary">Dashboard</button>
            </Link>

            <Link onClick={handleSignOut}>
              <button className="btn btn-outline btn-primary">Logout</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="login">
              <button className="btn btn-outline btn-primary">Login</button>
            </Link>
            <Link to="register">
              <button className="btn btn-outline btn-primary">Register</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
