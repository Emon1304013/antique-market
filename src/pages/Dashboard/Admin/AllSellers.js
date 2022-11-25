import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../contexts/AuthProvider";

const AllSellers = () => {
  const { user } = useContext(AuthContext);

  const {
    data: sellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users/sellers", {
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
    
    const res = fetch(`http://localhost:5000/users/seller/${id}`,{
        method:'DELETE',
        headers:{
            'content-type':'application/json',
            authorization:`bearer ${localStorage.getItem('antique-token')}`
        }
    })
    const data = await res.json;
    if(data.acknowledged){
        Swal.fire("Seller Deleted Successfully");
        refetch();
    }
    else{
        Swal.fire("Something Went Wrong")
    }
  }
  console.log(sellers);
  return (
    <div>
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
            </tr>
          </thead>
          <tbody>
            {sellers?.map((seller,i) => (
              <tr
              key={seller._id}
              >
                <td>{i+1}</td>
                <td>Demo Name</td>
                <td>{seller?.email}</td>
                <td><button onClick={()=>handleDeleteSeller(seller?._id)} className="btn btn-error">DELETE</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
