import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../contexts/AuthProvider";

const AllSellers = () => {
  const { user } = useContext(AuthContext);
  const [isVerified,setIsVerified] = useState(false);

  const {
    data: sellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/users/sellers`, {
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("antique-token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteSeller = async id => {
    
    const res = await fetch(`${process.env.REACT_APP_API_URL}/users/seller/${id}`,{
        method:'DELETE',
        headers:{
            'content-type':'application/json',
            authorization:`bearer ${localStorage.getItem('antique-token')}`
        }
    })
    const data = await res.json();
    if(data.acknowledged){
        Swal.fire("Seller Deleted Successfully");
        refetch();
    }
    else{
        Swal.fire("Something Went Wrong")
    }
  }

  const handleVerifySeller = (seller) =>{
    fetch(`${process.env.REACT_APP_API_URL}/seller/verify/${seller.email}`,{
        method:'PATCH',
        headers:{
            'content-type':'application/json',
            authorization:`bearer ${localStorage.getItem('antique-token')}`,
        }
    }).then(res => res.json()).then(data => {
        console.log(data)
        setIsVerified(true)
        refetch();
    })
  }
  return (
    <div>
      {
        sellers?.length > 0 ? <>
        <h2 className="text-2xl font-bold mb-4 text-center text-secondary uppercase">
        All Sellers
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers?.map((seller,i) => (
              <tr
              key={seller._id}
              >
                <td>{i+1}</td>
                <td>{seller.name}</td>
                <td>{seller?.email}</td>
                <td>
                  <button onClick={()=>handleDeleteSeller(seller?._id)} className="btn btn-error text-white">DELETE</button>
                  </td>
                <td>{seller?.isVerified? <p className="text-green-500 font-bold text-xl">Verified</p> :<button onClick={() => {handleVerifySeller(seller)}} className="btn btn-active btn-secondary text-white">VERIFY</button>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </>:
      <>
      <p className="text-center text-xl font-bold text-secondary">
      Currently the site has no sellers
      </p>
      </>
      }
    </div>
  );
};

export default AllSellers;
