import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import Header2 from '../shared/Header/Header2';

const MainLayout = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <Header2></Header2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;