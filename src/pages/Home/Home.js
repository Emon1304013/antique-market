import React from 'react';
import Hero from '../../components/Hero/Hero';
import { useTitle } from '../../hooks/useTitle';
import Categories from './Categories/Categories';
// import HowItWorks from './HowItWorks/HowItWorks';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Hero></Hero>
            <Categories></Categories>
            {/* <HowItWorks color="red"></HowItWorks> */}
        </div>
    );
};

export default Home;