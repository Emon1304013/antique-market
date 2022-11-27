import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Spinner from "../../../components/Spinner/Spinner";

const ReportedItems = () => {
  const { data: reportedItems = [], isLoading,refetch } = useQuery({
    queryKey: ["reportedItems"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/reportedItems", {
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
  const handleDeleteProduct = id => {
    fetch(`${process.env.REACT_APP_API_URL}/products/${id}`,{
        method:"DELETE",
        headers:{
            'content-type':'application/json',
            authorization:`bearer ${localStorage.getItem('antique-token')}`,
        }
    }).then(res => res.json()).then(data =>{
        if(data.deletedCount>0){
            Swal.fire("Item deleted");
            refetch();
        }
        else{
            Swal.fire("Deletion not possible right now. Please try again later! ")
        }
    })
    .catch(err=>{
        Swal.fire("Something Went wrong");
    })
  }
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <h2 className="text-center font-bold text-2xl text-secondary mb-8">
        Reported Items
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Seller</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reportedItems.map((item, i) => (
              <tr key={item._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={item.productImage} alt="" />
                    </div>
                  </div>
                </td>
                <td>{item.productName}</td>
                <td>{item.sellerEmail}</td>
                <td>
                 <button onClick={() => {handleDeleteProduct(item._id)}} className="btn btn-error">DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportedItems;
