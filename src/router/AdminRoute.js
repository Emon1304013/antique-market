import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) =>{
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin,isAdminLoading] = useAdmin(user?.email);
    console.log(isAdmin,isAdminLoading);

    if(loading || isAdminLoading){
        return <Spinner></Spinner>
    }

    if (user && isAdmin){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};


export default AdminRoute;