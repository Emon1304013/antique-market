import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisedProductCard from '../../../components/AdvertisedProductCard/AdvertisedProductCard';
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
    return (
        <>
        {
            (advertisedProducts?.length > 0) && <div className='mb-12'>
            <h2 className='text-center font-bold text-3xl text-secondary my-8'>Advertised Products</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {
                    advertisedProducts?.map(product => 
                    <AdvertisedProductCard
                    key={product._id}
                    product={product}>
                    </AdvertisedProductCard>)
                }
            </div>
        </div>
        }
        </>
    );
};

export default AdvertisedProducts;