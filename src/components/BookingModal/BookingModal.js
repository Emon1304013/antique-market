import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({product}) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleSubmit = () => {
    Swal.fire("Information Recieved. Thanks!")
  }
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div>
            <label className="label">
              <span className="label-text">Customer Name</span>
            </label>
            <input
            type="text"
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
              disabled
              defaultValue={product?.price}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="text"
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
              placeholder="Location"
              className="input input-bordered w-full"
            />
          </div>
          <div className="modal-action">
            <label onClick={handleSubmit} htmlFor="booking-modal" className="btn">
              Submit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
