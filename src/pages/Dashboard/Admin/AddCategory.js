import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SmallSpinner from "../../../components/SmallSpinner/SmallSpinner";
import Spinner from "../../../components/Spinner/Spinner";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useTitle } from "../../../hooks/useTitle";

const AddCategory = () => {
  useTitle("Add Category");
  const {user, loading,setLoading } =
    useContext(AuthContext);

  const {
    register,
    reset,
    formState: { errors, },
    handleSubmit,
  } = useForm();
  if(loading) {
    return <Spinner></Spinner>
  }

  const imgHostKey = process.env.REACT_APP_imgbb_key;

  const handleAddCategory = (data) => {
    if(loading) {
        <Spinner></Spinner>
      }
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);

    fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData.data.url);
        const category = {
          categoryName: data.categoryName,
          categoryImage: imgData.data.url,
        };
        console.log(category);
        fetch('http://localhost:5000/categories',{
          method:"POST",
          headers:{
            'content-type':'application/json',
            // authorization: `bearer ${localStorage.getItem('accessToken')}`
          },
          body:JSON.stringify(category)
        })
        .then(res => res.json())
        .then(result => {
          console.log(result);
          if(result.success){

              Swal.fire("Category added successfully")
          }
          else{
            Swal.fire(result.message)
          }
          // toast.success("Inserted doctor information")
        })
      });
  };

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

      {
        loading ? <Spinner></Spinner> : <button type="submit" className="btn btn-neutral w-full">
        Add Category
      </button>
      }
    </form>
  );
};

export default AddCategory;
