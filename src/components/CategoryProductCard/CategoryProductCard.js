import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import BookingModal from "../BookingModal/BookingModal";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import tick from "../../assets/check.png";
import Swal from "sweetalert2";
const CategoryProductCard = ({ product }) => {
  const { user } = useContext(AuthContext);
  const [isSellerVerified, setIsSellerVerified] = useState(false);
  const [booking, setBooking] = useState(null);
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
    sellerEmail,
  } = product;

  const { data: seller = {} } = useQuery({
    queryKey: ["seller"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/user/${product?.sellerEmail}`,
        {
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("antique-token")}`,
          },
        }
      );
      const data = await res.json();
      if (data.isVerified) {
        setIsSellerVerified(true);
      }
      return data;
    },
  });

  const handleReportAdmin = id => {
    
  // store reported items to the database 
  fetch(`http://localhost:5000/reportedItem/${id}`,{
    method:"PATCH",
    headers:{
      'content-type':'application/json',
      authorization:`bearer ${localStorage.getItem('antique-token')}`
    },
  }).then(res => res.json()).then(data => {
    console.log(data);
    Swal.fire("Item reported")
  })
}

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
        <div className="flex justify-between">
          <h2 className="card-title">{productName}</h2>
          <>
            {isSellerVerified && (
              <>
                <img src={tick} className="h-6 w-6" alt="" />
              </>
            )}
          </>
        </div>
        <div className="flex justify-between">
          <p className="text-lg">
            Original Price:{" "}
            <span className="font-bold">{originalPrice}BDT</span>
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
        <div className="flex justify-between">
          <button
            onClick={() => handleReportAdmin(product._id)}
            className="btn text-white btn-warning"
          >
            Report to Admin
          </button>

          <label
            onClick={() => setBooking(product)}
            htmlFor="booking-modal"
            className="btn btn-secondary text-white"
          >
            Book Now
          </label>
        </div>
      </div>
      {booking && (
        <BookingModal setBooking={setBooking} product={product}></BookingModal>
      )}
    </div>
  );
};

export default CategoryProductCard;
