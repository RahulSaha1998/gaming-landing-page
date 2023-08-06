import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Organize from '../Tournaments/Organize/Organize';
import Checkout from '../Tournaments/Checkout/Checkout';

const Home = () => {
    return (
        <>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <About></About>
            </div>
            <div>
                <Organize></Organize>
            </div>
            <div>
                <Checkout></Checkout>
            </div>
        </>
    );
};

export default Home;