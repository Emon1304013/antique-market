import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import BookingModal from "../BookingModal/BookingModal";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const AdvertisedProductCard = ({ product }) => {
  const {user} = useContext(AuthContext);
  const [booking,setBooking] = useState(null);
  const {
    _id,
    resellPrice,
    productName,
    productImage,
    posted,
    sellerEmail,
    condition,
    isPaid,
    isAdvertised,
  } = product;
  
  return (
    <div className="card w-full mx-auto bg-base-100 shadow-xl">
      <figure>
        <img
          src={productImage}
          alt={productName}
          className="h-[300px] w-full "
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {productName}
        </h2>
          <div className="badge badge-secondary">{posted.slice(0,10)}</div>
        <p>
          Condition:{" "}
          <span className="font-semibold"> {condition.toUpperCase()}</span>
        </p>
        <p>
          Price: <span className="font-semibold"> {resellPrice}</span>
        </p>
        <div className="card-actions justify-end">
          {/* <div className="badge badge-outline"></div> */}
          <label onClick={() => setBooking(product)} htmlFor="booking-modal" className="btn btn-secondary text-white">
          Book Now
        </label>
        </div>
        {
        booking && <BookingModal 
        setBooking = {setBooking}
        product = {product}></BookingModal>
      }
      </div>
    </div>
  );
};

export default AdvertisedProductCard;
