import React from 'react';
import Hero from '../../components/Hero/Hero';
import Categories from './Categories/Categories';
// import HowItWorks from './HowItWorks/HowItWorks';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Categories></Categories>
            {/* <HowItWorks color="red"></HowItWorks> */}
        </div>
    );
};

export default Home;