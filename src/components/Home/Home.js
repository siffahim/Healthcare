import React from 'react';
import Banner from '../Banner/Banner';
import Demand from '../Demand/Demand';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Demand />
        </div>
    );
};

export default Home;