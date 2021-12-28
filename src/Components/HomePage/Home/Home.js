import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../../Packages/Packages';


const Home = () => {
    return (
        <div className='mt-5'>
            <Banner></Banner>
            <Packages></Packages>
        </div>
    );
};

export default Home;