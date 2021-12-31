import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './TourGallery.css';

const TourGallery = () => {
    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <div className="col-lg-12">
                        <div className="gallery_heading text-center mb-5">
                            <h1>Travel Gallery</h1>
                            <p>"Welcome to the fantasy of a dreamy island with utmost perfectional beauty"- This is how the pictures of Bora Bora entice you for a vacation. A part of French Polynesia, this magical island has some of the most beautiful sights to behold- a tropical island surrounded.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />

                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"
                        />
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Mountains in the Clouds"
                        />

                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Waves at Sea"
                        />

                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Yosemite National Park"
                        />
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default TourGallery;