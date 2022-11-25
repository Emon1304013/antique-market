import React from "react";

const SingleSellerProduct = ({ product, i }) => {
  const { productName, resellPrice } = product;
  const setStatus = (e) => {
    console.log(product,e.target.value);
  }
  return (

      <tr>
        <th>{i + 1}</th>
        <td>{productName}</td>
        <td>{resellPrice}</td>
        <td>
          <select
          onChange={(e)=> setStatus(e)}
           className="select select-bordered w-2/3 max-w-xs">
            <option value="available">Available</option>
            <option value="sold">Sold</option>
          </select>
        </td>
        <td>
        <button className="btn btn-success text-white">Advertise</button>
        </td>
      </tr>
  );
};

export default SingleSellerProduct;
