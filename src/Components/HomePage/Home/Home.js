import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../../Packages/Packages';
import NewsLetter from '../../NewsLater/NewsLetter'
import TourGallery from '../../Gallery/TourGallery';
import TourGuide from '../../TourGuide/TourGuide';


const Home = () => {
    return (
        <div className='mt-5'>
            <Banner></Banner>
            <Packages></Packages>
            <NewsLetter></NewsLetter>
            <TourGallery></TourGallery>
            <TourGuide></TourGuide>
        </div>
    );
};

export default Home;