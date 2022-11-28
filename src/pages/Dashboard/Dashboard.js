import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='flex justify-center'>
            <div className='mt-20 text-center'>
                <h2 className='text-2xl'>Welcome, <span className='font-bold'> {user?.displayName}</span></h2>
                <p className='text-xl'>This is your Dashboard</p>
            </div>
        </div>
    );
};

export default Dashboard;