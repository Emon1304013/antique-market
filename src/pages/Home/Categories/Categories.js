import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Categories = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 lg:mx-0">
        <div class="wrapper antialiased text-gray-900">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0523/8852/8327/products/EL-005-1128_A_900x.jpg?v=1628249146"
              alt=" random imgee"
              class="w-full object-cover object-center rounded-lg shadow-md"
            />

            <div class="relative px-4 -mt-16  ">
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                  Dining
                </h4>
                <div class="mt-4">
                  <PrimaryButton>View Details</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="wrapper antialiased text-gray-900">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0523/8852/8327/products/EL-002-139_A_1024x1024@2x.jpg?v=1608618769"
              alt=" random imgee"
              class="w-full object-cover object-center rounded-lg shadow-md"
            />

            <div class="relative px-4 -mt-16  ">
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                  Dining
                </h4>
                <div class="mt-4">
                  <PrimaryButton>View Details</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="wrapper antialiased text-gray-900">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0523/8852/8327/products/EL-002-208_A_1024x1024@2x.jpg?v=1633944495"
              alt=" random imgee"
              class="w-full object-cover object-center rounded-lg shadow-md"
            />

<div class="relative px-4 -mt-16  ">
              <div class="bg-white p-6 rounded-lg shadow-lg">
                
                <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                  Dining
                </h4>
                <div class="mt-4">
                  <PrimaryButton>View Details</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
