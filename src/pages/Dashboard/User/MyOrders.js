import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import Spinner from "../../../components/Spinner/Spinner";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const {
    data: myBookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myBookings"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/bookings/${user?.email}`, {
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("antique-token")}`,
        },
      });
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  if(isLoading){
    <Spinner></Spinner>
  }
  console.log(myBookings);
  return (
    <div className="mb-8">
      {(myBookings.length>0) ? <>
          <h2 className="text-3xl text-center font-bold mb-4">My Bookings</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {myBookings?.map((myBooking) => (
              <div
                key={myBooking._id}
                className="card card-compact w-96 bg-base-100 shadow-xl"
              >
                <figure>
                  <img src={myBooking.img} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{myBooking.productName}</h2>
                  <p>Price: {myBooking.price}</p>
                  <div className="card-actions justify-end">
                    {
                      myBooking.paid ? <b className="text-green-500 justify-end font-bold text-2xl ">PAID</b> : <Link to={`/dashboard/payment/${myBooking._id}`}><button className="btn btn-primary">Pay Now</button></Link>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </> : <div className="text-center mt-8">
        <p className="text-2xl font-bold mb-4"> You don't have any bookings now. Please order something.</p>
        <Link to="/"><PrimaryButton>Go to Home</PrimaryButton></Link>
        </div>
        }
    </div>
  );
};

export default MyOrders;
