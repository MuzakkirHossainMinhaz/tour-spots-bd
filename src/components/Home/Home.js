import React from 'react';
import Hero from '../Hero';
import Recommend from '../Recommended';
import Services from '../Services';
import Testimonials from '../Testimonials';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Recommend></Recommend>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;