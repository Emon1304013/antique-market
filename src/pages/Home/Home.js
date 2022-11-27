import React from 'react';
import Hero from '../../components/Hero/Hero';
import { useTitle } from '../../hooks/useTitle';
import AdvertisedProducts from './AdvertisedProducts/AdvertisedProducts';
import Categories from './Categories/Categories';
import HowItWorks from './HowItWorks/HowItWorks';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Hero></Hero>
            <AdvertisedProducts></AdvertisedProducts>
            <Categories></Categories>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;