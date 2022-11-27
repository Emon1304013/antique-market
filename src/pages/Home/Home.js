import React from 'react';
import Hero from '../../components/Hero/Hero';
import { useTitle } from '../../hooks/useTitle';
import AdvertisedProducts from './AdvertisedProducts/AdvertisedProducts';
import AppAdvertiseSection from './AppAdvertiseSection/AppAdvertiseSection';
import Categories from './Categories/Categories';
import HowItWorks from './HowItWorks/HowItWorks';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Hero></Hero>
            <AdvertisedProducts></AdvertisedProducts>
            <Categories></Categories>
            <AppAdvertiseSection></AppAdvertiseSection>
        </div>
    );
};

export default Home;