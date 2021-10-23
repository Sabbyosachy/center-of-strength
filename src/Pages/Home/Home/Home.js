import React from 'react';
import AllTrainers from '../AllTrainers/AllTrainers';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <AllTrainers/>
        </div>
    );
};

export default Home;