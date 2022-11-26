import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const AdvertisedProductCard = ({ product }) => {
  const {
    _id,
    resellPrice,
    productName,
    productImage,
    posted,
    sellerEmail,
    condition,
  } = product;

//   const month = posted.getMonth() + 1; //months from 1-12
//   const day = posted.getDate();
//   const year = posted.getFullYear();

//   const newdate = year + "/" + month + "/" + day;
//   console.log(newdate);
  return (
    <div className="card w-full bg-base-100 shadow-xl">
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
          <div className="badge badge-secondary">{posted}</div>
        </h2>
        <p>
          Condition:{" "}
          <span className="font-semibold"> {condition.toUpperCase()}</span>
        </p>
        <p>
          Price: <span className="font-semibold"> {resellPrice}</span>
        </p>
        <div className="card-actions justify-end">
          {/* <div className="badge badge-outline"></div> */}
          <PrimaryButton>Book Now</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedProductCard;
