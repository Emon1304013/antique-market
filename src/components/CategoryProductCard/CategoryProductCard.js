import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import BookingModal from "../BookingModal/BookingModal";
import tick from "../../assets/check.png";
import Swal from "sweetalert2";
import Spinner from "../Spinner/Spinner";
const CategoryProductCard = ({ product,refetch }) => {
  const { loading } = useContext(AuthContext);
  const [isSellerVerified, setIsSellerVerified] = useState(false);
  const [booking, setBooking] = useState(null);
  const {
    location,
    productName,
    originalPrice,
    resellPrice,
    productImage,
    purchaseYear,
    posted,
    sellerEmail,
  } = product;

  const { data: seller = {},isLoading } = useQuery({
    queryKey: ["sellerName",sellerEmail],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/user/${product?.sellerEmail}`,
        {
          headers: {
            'content-type': 'application/json',
            authorization: `bearer ${localStorage.getItem("antique-token")}`,
          },
        }
      );
      const data = await res.json()
      console.log(data);
      refetch();
      if (data?.isVerified) {
        setIsSellerVerified(true);
      }
      return data;
    }
  });


  const handleReportAdmin = id => {
    
  // store reported items to the database 
  fetch(`${process.env.REACT_APP_API_URL}/reportedItem/${id}`,{
    method:"PATCH",
    headers:{
      'content-type':'application/json',
      authorization:`bearer ${localStorage.getItem('antique-token')}`
    },
  }).then(res => res.json()).then(data => {
    Swal.fire("Item reported")
  })
}
if(isLoading && loading){
  return <Spinner></Spinner>
}
  const currentYear = new Date().getFullYear();
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
          {
            seller?.name && <p className="text-lg">
            Seller: <span className="font-bold">{seller?.name }</span>
          </p>
          }
          <p className="text-lg">Location: {location}</p>
        </div>

        <div className="card-actions justify-between mb-8">
          <p className="text-lg">
            Used for {parseInt(currentYear) - parseInt(purchaseYear)} years
          </p>
          <p className="text-lg">Posted : {posted.slice(0,10)}</p>
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
