import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({ product, setBooking }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const productName = form.productName.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const bookedProduct = {
      userName,
      userEmail,
      productName,
      price,
      phone,
      location,
      img: product.productImage,
      productId: product._id,
    };
    fetch(`${process.env.REACT_APP_API_URL}/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("antique-token")}`,
      },
      body: JSON.stringify(bookedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Booking Confirmed. Thanks!");
      });
    setBooking(null);
  };

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="label">
                <span className="label-text">Customer Name</span>
              </label>
              <input
                type="text"
                name="userName"
                disabled
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="userEmail"
                disabled
                defaultValue={user?.email}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Item name</span>
              </label>
              <input
                type="text"
                name="productName"
                disabled
                defaultValue={product.productName}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                disabled
                defaultValue={product?.resellPrice}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Meeting Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="input input-bordered w-full"
              />
            </div>
            <div className="modal-action">
              {user ? (
                <>
                  <button onClick={() => setBooking(null)} className="btn">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-secondary">
                    Submit
                  </button>
                </>
              ) : (
                <Link to='/login'><button type="submit" className="btn btn-secondary">
                Please Login to Book
              </button></Link>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
