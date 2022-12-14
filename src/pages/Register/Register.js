import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import logo from "../../assets/google-icon.svg";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";
import Spinner from "../../components/Spinner/Spinner";
import { useTitle } from "../../hooks/useTitle";
import { setAuthToken } from "../../api/auth";

const Register = () => {
  useTitle("Register");
  const { createUser, updateUserProfile, loading, googleSignIn, setLoading } =
    useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const handleRegister = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        updateUserProfile(data.name)
          .then(() => {
            const currentUser = {
              email: user?.email,
              userType: data.userType,
              name: user?.displayName,
            };
            // toast.success("User created Successfully")
            Swal.fire("User created Successfully");
            setAuthToken(currentUser);
            setLoading(false);
          })
          .catch((error) =>
            Swal.fire({
              icon: "error",
              title: error.message,
              showCloseButton: true,
            })
          );
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.message,
          showCloseButton: true,
        });
        setLoading(false);
      });
  };

  const handleGoogleSignin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user?.email,
          userType: "buyer",
          name: user?.displayName,
        };
        setAuthToken(currentUser);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.message,
          showCloseButton: true,
        });
      });
  };

  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <section className="my-20">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="SampleImage"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Your Nname"
                  className="input input-bordered w-full"
                />

                {errors.name?.type === "required" && (
                  <p role="alert" className="text-red-600 font-bold pt-2">
                    Name is required
                  </p>
                )}
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered w-full"
                />
                {errors.email?.type === "required" && (
                  <p role="alert" className="text-red-600 font-bold pt-2">
                    Email is required
                  </p>
                )}
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">User type</span>
                </label>
                <select
                  {...register("userType", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option disabled defaultValue>
                    User Type
                  </option>
                  <option value="Buyer">Buyer</option>
                  <option value="Seller">Seller</option>
                </select>

                {errors.userType?.type === "required" && (
                  <p role="alert" className="text-red-600 font-bold pt-2">
                    Category is required
                  </p>
                )}
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password Must be 6 characters Long",
                    },
                  })}
                  type="password"
                  name="password"
                  placeholder="Your password"
                  className="input input-bordered w-full"
                />
                {errors.password && (
                  <p role="alert" className="text-red-600 font-bold pt-2">
                    {errors.password.message}
                  </p>
                )}
                <label htmlFor="" className="label">
                  <span className="label-text text-white">Forget password</span>
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-secondary w-full text-white"
              >
                Register
              </button>
            </form>
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p className="text-center font-semibold mx-4 mb-0">Or</p>
            </div>

            <div className="mb-6 w-full">
              <Link onClick={handleGoogleSignin}>
                <button
                  type="submit"
                  className="w-full block bg-green-500 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
                >
                  Sign up with Google
                </button>
              </Link>
            </div>
            <p className="text-md font-semibold mt-2 pt-1 mb-0">
              Already Have an account?
              <Link
                to="/login"
                className="text-green-600 hover:text-green-700 focus:text-green-700 transition duration-200 ease-in-out"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
