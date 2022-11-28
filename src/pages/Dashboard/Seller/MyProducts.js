import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useTitle } from "../../../hooks/useTitle";
import SingleSellerProduct from "./SingleSellerProduct";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  useTitle("Seller Products");

  const {
    data: sellerProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellerProducts"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/products/seller/${user?.email}`,
        {
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("antique-token")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(sellerProducts);
  return (
    <div>
      <h2 className="text-2xl text-center font-bold text-secondary mb-4">
        My Products
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Advertise</th>
            </tr>
          </thead>
          <tbody>
            {sellerProducts?.map((product, i) => (
              <SingleSellerProduct
              key={product._id}
              i={i}
              product={product}
              refetch={refetch}
              >

              </SingleSellerProduct>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
