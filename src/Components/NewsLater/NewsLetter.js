import React from 'react';
import { Button, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div>
            <div className="subscribe">
                <Container>
                    <Row>
                        <div style={{ 'marginTop': '65px' }} className="col-lg-6 letter_content">
                            <h1>SUBSCRIBE OUR <span>NEWSLETTER</span> </h1>
                            <p>Sign up to receive the best offers on promotion and coupons. Don’t worry! It’s not Spam</p>

                            <InputGroup className="mb-3 w-75  letter_grp">
                                <FormControl className='news_btn'
                                    placeholder="Email Here"
                                    aria-describedby="basic-addon2"
                                />
                                <Button style={{ 'backgroundColor': '#ff4838', 'border': ' 1px solid #ff4838', 'color': '#ffff' }} className='letter_btn' variant="outline-secondary" id="button-addon2">
                                    Subscribe
                                </Button>
                            </InputGroup>
                        </div>
                        <div className="col-lg-6 letter_content">
                            <Row>
                                <div className="col-lg-6">
                                    <div className="tour_count">
                                        <h1>500+</h1>
                                        <p>Awesome Tour</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="tour_count">
                                        <h1>300+</h1>
                                        <p>New Destination</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-5">
                                    <div className="tour_count">
                                        <h1>05+</h1>
                                        <p>Year Experience</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-5">
                                    <div className="tour_count">
                                        <h1>150+</h1>
                                        <p>Best Mountains</p>
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default NewsLetter;