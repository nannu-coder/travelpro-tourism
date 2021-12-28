import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/banner1.png';
import banner2 from '../../../Images/banner2.png';
import banner3 from '../../../Images/banner3.png';
import './Banner.css';
import 'animate.css';

const Banner = () => {
    return (
        <div>
            <Carousel fade className='slider'>
                <Carousel.Item className='overlay'>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />

                    <Carousel.Caption className='caption'>
                        <h1 className='animate__animated animate__fadeInUp'>Travel <span></span></h1>
                        <h1 className='text-bnr animate__animated animate__fadeInUp'>Adventure</h1>
                        <p>We created the travel agency to combine our passion for travel with our desire to assist leisure. we are resolute in totally understanding the goals, objectives and budgets of our clients so we can present them with multiple alternatives for fun, educational and relaxing travel.</p>

                        <button className='baner-btn clrs'>View Adventure</button>
                        <button className='baner-btn trns'>Take a Tour</button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='overlay'>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='caption'>
                        <h1 className='animate__animated animate__fadeInUp'>Travel <span></span></h1>
                        <h1 className='text-bnr animate__animated animate__fadeInUp'>Adventure</h1>
                        <p>We created the travel agency to combine our passion for travel with our desire to assist leisure. we are resolute in totally understanding the goals, objectives and budgets of our clients so we can present them with multiple alternatives for fun, educational and relaxing travel.</p>

                        <button className='baner-btn clrs'>View Adventure</button>
                        <button className='baner-btn trns'>Take a Tour</button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='overlay'>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='caption'>
                        <h1 className='animate__animated animate__fadeInUp'>Travel <span></span></h1>
                        <h1 className='text-bnr animate__animated animate__fadeInUp'>Adventure</h1>
                        <p>We created the travel agency to combine our passion for travel with our desire to assist leisure. we are resolute in totally understanding the goals, objectives and budgets of our clients so we can present them with multiple alternatives for fun, educational and relaxing travel.</p>

                        <button className='baner-btn clrs'>View Adventure</button>
                        <button className='baner-btn trns'>Take a Tour</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;