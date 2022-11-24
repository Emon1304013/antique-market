import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useTitle } from "../../../hooks/useTitle";

const AddCategory = () => {
  useTitle("Add Category");
  const { createUser, updateUserProfile, loading, googleSignIn } =
    useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleAddCategory = (data) => {
    console.log(data);
  };

  const imgHostKey = process.env.REACT_APP_imgbb_key;
  return (
    <form
      className="space-y-4 w-96 mx-auto mt-20"
      onSubmit={handleSubmit(handleAddCategory)}
    >
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Category Name</span>
        </label>
        <input
          {...register("categoryName", { required: true })}
          type="text"
          placeholder="category Name"
          className="input input-bordered w-full"
        />

        {errors.categoryName?.type === "required" && (
          <p role="alert" className="text-red-600 font-bold pt-2">
            Category Name is required
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

      <button type="submit" className="btn btn-neutral w-full">
        Add Category
      </button>
    </form>
  );
};

export default AddCategory;
