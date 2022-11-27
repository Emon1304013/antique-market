import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Spinner from '../../../components/Spinner/Spinner';
import WishedItemCard from '../../../components/WishedItemCard/WishedItemCard';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyWishlist = () => {
    const {user} = useContext(AuthContext);

    const {data: wishlists = [],isLoading} = useQuery({
        queryKey:['wishlist'],
        queryFn:async()=> {
            const res = await fetch(`http://localhost:5000/wishtlist/${user?.email}`,{
                headers:{
                    authorization: `bearer ${localStorage.getItem('antique-token')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })
    console.log(wishlists);
    if(isLoading){
        <Spinner></Spinner>
    }
    return (
        <div className='my-8'>
            <h2 className='text-center font-bold text-2xl text-secondary mb-8'>Your Wishlist</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    wishlists.map(wishedItem => <WishedItemCard
                    key={wishedItem._id}
                    product = {wishedItem}
                    ></WishedItemCard>)
                }
            </div>
        </div>
    );
};

export default MyWishlist;