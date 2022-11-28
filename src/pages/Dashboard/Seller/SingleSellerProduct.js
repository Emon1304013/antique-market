import React from "react";
import Swal from "sweetalert2";

const SingleSellerProduct = ({ product, i,refetch }) => {
  const { productName, resellPrice, _id, isAdvertised } = product;

  const handleAdvertise = (id) => {
    console.log("Product ID", id);
    fetch(`${process.env.REACT_APP_API_URL}/products/advertise/${id}`,{
      method:"PATCH",
      headers:{
        'content-type':'application/json',
        authorization:`bearer ${localStorage.getItem('antique-token')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount>0){
        Swal.fire("Product advertised successfully");
        refetch()
      }
      else{
        Swal.fire("Something Went wrong")
      }
    })
  };
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{productName}</td>
      <td>{resellPrice}</td>
      <td>
        {
          product?.isPaid ? <p className="text-red-500 font-bold">SOLD</p> : <p className="text-green-500 font-bold">AVAILABLE</p>
        }
      </td>
      <td>
        {isAdvertised ? (
          "ADVERTISED"
        ) : (
          <button
            onClick={() => handleAdvertise(_id)}
            className="btn btn-success text-white"
          >
            Advertise
          </button>
        )}
      </td>
    </tr>
  );
};

export default SingleSellerProduct;
