import React from 'react';
import Banner from '../Banner/Banner';
import Demand from '../Demand/Demand';
import Services from '../Services/Services';
import Summery from '../Summery/Summery';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Summery />
            <Demand />
        </div>
    );
};

export default Home;