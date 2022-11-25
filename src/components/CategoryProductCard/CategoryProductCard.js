import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import BookingModal from "../BookingModal/BookingModal";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const CategoryProductCard = ({ product }) => {

    const {user} = useContext(AuthContext)
  const {
    categoryId,
    _id,
    location,
    number,
    productName,
    originalPrice,
    resellPrice,
    productImage,
    purchaseYear,
  } = product;
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  console.log(typeof currentYear, typeof purchaseYear);
  console.log(parseInt(currentYear));
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={productImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <div className="card-actions justify-between">
          <p className="text-lg">
            Original Price: <span className="font-bold">{originalPrice}BDT</span>
          </p>
          <p className="text-lg">
            Resale Price: <span className="font-bold">{resellPrice}BDT</span>
          </p>
        </div>

        <div className="card-actions justify-between">
          <p className="text-lg">
            Seller Name: <span className="font-bold">Admin</span>
          </p>
          <p className="text-lg">Location: {location}</p>
        </div>

        <div className="card-actions justify-between mb-8">
          <p className="text-lg">
            Used for {parseInt(currentYear) - parseInt(purchaseYear)} years
          </p>
          <p className="text-lg">Posted : {location}</p>
        </div>
        <label htmlFor="booking-modal" className="btn btn-secondary text-white">
          Book Now
        </label>
      </div>
      <BookingModal product = {product}></BookingModal>
    </div>
  );
};

export default CategoryProductCard;
