import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
// import { addProduct } from "../../../api/Product/AddProduct";
import Spinner from "../../../components/Spinner/Spinner";
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

  const imgHostKey = process.env.REACT_APP_imgbb_key;

  const handleAddProduct = (data) => {
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
        const product = {
          productName: data.productName,
          price: data.price,
          category:data.category,
          condition: data.condition,
          productImage: imgData.data.url,
          number: data.mobile,
          location: data.location,
          description: data.description,
          purchaseYear: data.purchaseYear,
        };
        console.log(product);
        fetch('http://localhost:5000/products',{
          method:"POST",
          headers:{
            'content-type':'application/json',
            // authorization: `bearer ${localStorage.getItem('accessToken')}`
          },
          body:JSON.stringify(product)
        })
        .then(res => res.json())
        .then(result => {
          console.log(result);
          Swal.fire("Product added successfully")
          // toast.success("Inserted doctor information")
          console.log(JSON.stringify(product));
        })
      });
  };

  if(loading) {
    <Spinner></Spinner>
  }
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
          placeholder="Product Name"
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
          <span className="label-text">Category</span>
        </label>
        <select
          {...register("category", { required: true })}
          className="select select-bordered w-full"
        >
          <option disabled defaultValue>
            Product category
          </option>
          <option value="dining">Dining</option>
          <option value="bedroom">Bedroom</option>
          <option value="study">Study</option>
        </select>

        {errors.category?.type === "required" && (
          <p role="alert" className="text-red-600 font-bold pt-2">
            Category is required
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
            Product Condition
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
          className="textarea input-bordered"
          placeholder="Product Description"
        ></textarea>

        {errors.description?.type === "required" && (
          <p role="alert" className="text-red-600 font-bold pt-2">
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
          <p role="alert" className="text-red-600 font-bold pt-2">
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
