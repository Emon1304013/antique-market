import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTitle } from "../../hooks/useTitle";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";
import Spinner from "../../components/Spinner/Spinner";
import { setAuthToken } from "../../api/auth";

const Login = () => {
  const { user, signInUser, googleSignIn, loading, setLoading } =
    useContext(AuthContext);
  useTitle("Login");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const handleLogin = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire("User Signed in succefully");
        setAuthToken(user);
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Wrong credential! Please try again',
        })
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
        const user = result.user;
        const currentUser = {
          email: user?.email,
          userType: "buyer",
          name: user?.displayName,
      }
        setAuthToken(currentUser);
        Swal.fire("User logged in successfully");
        navigate("/");
      })
      .catch((error) => {
        Swal.fire(error)
        setLoading(false);
      });
  };

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <section className="flex flex-col md:flex-row h-screen items-center mt-4 md:mt-10">
      <div className="hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          src="https://cdn.shopify.com/s/files/1/0523/8852/8327/products/chirping-birds-wall-decor-hanging-in-recycled-wood-11-inch-hand-painted-multicoloured-el-002-246_1_1024x1024@2x.jpg?v=1658985260"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
      >
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Log in to your account
          </h1>

          <form onSubmit={handleSubmit(handleLogin)} className="mt-6">
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              />
              {errors.email?.type === "required" && (
                <p role="alert" className="text-red-600 font-bold pt-2">
                  Email is required
                </p>
              )}
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
              />
              {errors.password && (
                <p role="alert" className="text-red-600 font-bold pt-2">
                  Password is required
                </p>
              )}
            </div>

            <div className="text-right mt-2">
              <Link
                to=""
                className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full block btn-secondary text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
            >
              Log In
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          <Link onClick={handleGoogleLogin}>
            <button
              type="submit"
              className="w-full block bg-green-500 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
            >
              Log In with Google
            </button>
          </Link>

          <p className="mt-8">
            Need an account?
            <Link
              to="/register"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              {" "}
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
