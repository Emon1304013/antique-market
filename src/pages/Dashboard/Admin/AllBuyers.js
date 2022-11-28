import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../contexts/AuthProvider";

const AllBuyers = () => {
  const { user } = useContext(AuthContext);

  const {
    data: buyers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/users/buyers`, {
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("antique-token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteBuyer = async(id) => {

    const res = fetch(`${process.env.REACT_APP_API_URL}/users/buyer/${id}`,{
        method:'DELETE',
        headers:{
            'content-type':'application/json',
            authorization:`bearer ${localStorage.getItem('antique-token')}`
        }
    })
    const data = await res.json;
    if(data.deletedCount>0){
        Swal.fire("Seller Deleted Successfully");
        refetch();
    }
    else{
        Swal.fire("Something Went Wrong")
    }

  };

  return (
    <div>
      <h2 className="text-2xl text-center font-bold text-secondary mb-4">
        All Buyers
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
            {buyers?.map((buyer, i) => (
              <tr key={buyer._id}>
                <td>{i + 1}</td>
                <td>{buyer.name}</td>
                <td>{buyer?.email}</td>
                <td>
                  <button
                    onClick={() => handleDeleteBuyer(buyer?._id)}
                    className="btn btn-error"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
