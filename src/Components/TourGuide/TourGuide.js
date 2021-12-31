import React from 'react';
import { Container, Row } from 'react-bootstrap';
import guide1 from '../../Images/guide-1.jpg';
import guide2 from '../../Images/guide-2.jpg';
import guide3 from '../../Images/guide-3.jpg';
import './TourGuide.css';

const TourGuide = () => {
    return (
        <div className='guides'>
            <Container>
                <Row>
                    <div className="col-lg-12">
                        <div className="tour_heading text-center">
                            <h1>Tour Guide</h1>
                            <p>As a tour guide you will face new challenges every day. One of the hardest parts of your job may be answering questions. Unlike a speech that you can memorize, you won't always know what questions people will ask.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img className='w-100 img-fluid' src={guide1} alt="" />
                        <h3>Harry David</h3>
                        <p>Tour Guide</p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img className='w-100 img-fluid' src={guide2} alt="" />
                        <h3>Elliot Marvan</h3>
                        <p>Tour Guide</p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img className='w-100 img-fluid' src={guide3} alt="" />
                        <h3>Rock Brucle</h3>
                        <p>Tour Guide</p>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default TourGuide;