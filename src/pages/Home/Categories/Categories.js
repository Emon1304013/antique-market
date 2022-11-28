import React, { useContext, useEffect, useState } from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import axios from 'axios'
import { AuthContext } from "../../../contexts/AuthProvider";
import Spinner from "../../../components/Spinner/Spinner";
import { Link } from "react-router-dom";

const Categories = () => {
  const {user,loading} = useContext(AuthContext)
  const [categories,setCategories] = useState([])

  useEffect(()=> {
    axios.get(`${process.env.REACT_APP_API_URL}/categories`)
    .then((data) => {
      // handle success
      console.log(data);
      setCategories(data.data)
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
  },[])

if(loading) {
  <Spinner></Spinner>
}
  return (
    <div>
      <h2 className='text-center font-bold text-3xl text-secondary my-8'>Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 lg:mx-0">
        {categories?.map(category => 
        <div 
        key={category._id}
        className="wrapper antialiased text-gray-900">
          <div>
            <img
              src={category.categoryImage
              }
              alt=" random imgee"
              className="w-full object-cover object-center rounded-lg shadow-md h-[300px]"
            />

            <div className="relative px-4 -mt-16  ">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                  {category.categoryName}
                </h4>
                <div className="mt-4">
                  <Link to={`/category/${category._id}`} ><PrimaryButton>View Details</PrimaryButton></Link>
                </div>
              </div>
            </div>
          </div>
        </div>)
          
          }
      </div>
    </div>
  );
};

export default Categories;
