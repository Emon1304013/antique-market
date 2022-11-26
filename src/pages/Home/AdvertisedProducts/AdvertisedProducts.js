import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../../components/Spinner/Spinner';

const AdvertisedProducts = () => {
    const {data:advertisedProducts=[],isLoading} = useQuery({
        queryKey:['advertisedProducts'],
        queryFn:async() => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/products/advertise`,{
                headers:{
                    'content-type':'application/json',
                    authorization:`bearer ${localStorage.getItem('antique-token')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Spinner></Spinner>
    }
    console.log(advertisedProducts);
    return (
        <div>
            <h2>Advertised Products</h2>
        </div>
    );
};

export default AdvertisedProducts;