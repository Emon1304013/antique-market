import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BookingModal from "../../components/BookingModal/BookingModal";
import CategoryProductCard from "../../components/CategoryProductCard/CategoryProductCard";
import Spinner from "../../components/Spinner/Spinner";

const SingleCategory = () => {

  const categoryId = useParams().id;
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/categories/${categoryId}`);
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="mt-8">
      <h2 className="text-2xl text-center mb-8">All Products</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {products?.map((product) => (
          <CategoryProductCard
          key={product._id}
          product={product}
          ></CategoryProductCard>
        ))}
        
      </div>

    </div>
  );
};

export default SingleCategory;
