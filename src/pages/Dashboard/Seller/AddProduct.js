import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useTitle } from "../../../hooks/useTitle";

const AddProduct = () => {
  useTitle("Add Product");
  const { createUser, updateUserProfile, loading, googleSignIn } =
    useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleAddProduct = (data) => {
    console.log(data);
  };
  return (
    <form
      className="space-y-4 w-96 mx-auto"
      onSubmit={handleSubmit(handleAddProduct)}
    >
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Product Name</span>
        </label>
        <input
          {...register("productName", { required: true })}
          type="text"
          placeholder="Your Nname"
          className="input input-bordered w-full"
        />

        {errors.productName?.type === "required" && (
          <p role="alert" className="text-red-600 font-bold pt-2">
            Product Name is required
          </p>
        )}
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input
          {...register("price", { required: true })}
          type="text"
          placeholder="Price"
          className="input input-bordered w-full"
        />

        {errors.price?.type === "required" && (
          <p role="alert" className="text-red-600 font-bold pt-2">
            Price is required
          </p>
        )}
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Condition</span>
        </label>

        <select
          {...register("condition", { required: true })}
          className="select select-bordered w-full"
        >
          <option disabled defaultValue>
            Pick your favorite Simpson
          </option>
          <option value="excellent">Excellent</option>
          <option value="good ">Good</option>
          <option value="fair">Fair</option>
        </select>
        {errors.condition?.type === "required" && (
          <p role="alert" className="text-red-600 font-bold pt-2">
            Condition is required
          </p>
        )}
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Photo</span>
        </label>
        <input
          {...register("img", { required: true })}
          type="file"
          className="input w-full"
        />
        {errors.img?.type === "required" && (
          <p role="alert" className="text-red-600 font-bold pt-2">
            Image is required
          </p>
        )}
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Mobile Number</span>
        </label>
        <input
          {...register("mobile", { required: true })}
          type="text"
          placeholder="Contact Number"
          className="input input-bordered w-full"
        />

        {errors.mobile?.type === "required" && (
          <p role="alert" className="text-red-600 font-bold pt-2">
            Mobile is required
          </p>
        )}
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Location</span>
        </label>
        <input
          {...register("location", { required: true })}
          type="text"
          placeholder="Location"
          className="input input-bordered w-full"
        />

        {errors.location?.type === "required" && (
          <p role="alert" className="text-red-600 font-bold pt-2">
            Location is required
          </p>
        )}
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea 
         {...register("description", { required: true })}
        className="textarea input-bordered" placeholder="Product Description"></textarea>

        {errors.description?.type === "required" && (
          <p role="alert" 
          className="text-red-600 font-bold pt-2">
            Description is required
          </p>
        )}
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Year of Purchase</span>
        </label>
        <input
          {...register("purchaseYear", { required: true })}
          type="text"
          placeholder="Year of Purchase"
          className="input input-bordered w-full"
        />

        {errors.description?.type === "required" && (
          <p role="alert" 
          className="text-red-600 font-bold pt-2">
            Description is required
          </p>
        )}
      </div>

      <button type="submit" className="btn btn-neutral w-full">
        Add Product
      </button>
    </form>
  );
};

export default AddProduct;
