import React from 'react';
import { Container, Row } from 'react-bootstrap';
import about from '../../../Images/about.jpg'

const AboutUs = () => {
    return (
        <div style={{ 'marginTop': '65px' }} className='about_us'>
            <Container>
                <Row>
                    <div class="about_heading text-center">
                        <h1>About Us</h1>
                    </div>
                    <div class="about_img">
                        <img className='img-fluid w-100' src={about} alt="" />
                    </div>
                    <div class="about_content mt-4">

                        <h6>‘TravelPro’</h6>
                        <p>
                            “Travel is the main thing you purchase that makes you more extravagant”. We, at ‘TravelPro’, swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly.
                            <br /> <br />
                            We have been moving excellent encounters for a considerable length of time through our cutting-edge planned occasion bundles and other fundamental travel administrations. We rouse our clients to carry on with a rich life, brimming with extraordinary travel encounters.</p>

                        <p>Through our exceptionally curated occasion bundles, we need to take you on an adventure where you personally enjoy the stunning magnificence of America and far-off terrains. We need you to observe sensational scenes that are a long way past your creative ability.
                            <br /> <br />
                            The powerful inclination of American voyagers to travel more nowadays is something that keeps us inspired to satisfy our vacation necessities. Our vision to give you a consistent occasion encounter makes us one of the main visit administrators in the regularly extending travel industry.</p>


                        <p>To guarantee that you have a satisfying occasion and healthy encounters, all our vacation administrations are available to your no matter what. On your universal occasion, we guarantee that you are very much outfitted with outside trade (Forex Cards, Currency Notes), visa, and travel protection.
                            <br /><br />
                            We are the pioneers of outside trade in America and booking forex online is basic and advantageous with us.
                            <br /><br />
                            Our online visa administrations are exceptional and make the bulky procedure of booking visas a cake stroll for clients. We likewise give exceptional visa, forex, and travel protection and outside settlement administrations for understudies voyaging abroad for study.
                            <br /><br />
                            Regardless of whether it’s reserving flights or inns for your movement, COmpany Name offers everything under one umbrella. We likewise have journey occasions for individuals who are searching for solace and reasonable extravagance.
                            <br /><br />
                            We offer the best limits on our top-rated visit bundles to clients who pick our viable administrations over and over. How about we remind you indeed that we don’t expect to be your visit and travel specialists; we endeavor to be your vacation accomplices until the end of time.

                        </p>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;