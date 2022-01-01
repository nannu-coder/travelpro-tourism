import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FiTwitter, FiFacebook, FiInstagram, FiYoutube, FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { BiEnvelope, BiTimeFive } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import img1 from '../../Images/packages/p-6.png';
import img2 from '../../Images/packages/p-7.png';
import img3 from '../../Images/packages/p-8.png';
import img4 from '../../Images/packages/package1.png';
import img5 from '../../Images/packages/package2.png';
import img6 from '../../Images/packages/package3.png';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer_top">
                <Container>
                    <Row>
                        <div className="col-lg-3">
                            <div className="footer_heading">
                                <h1>About Us</h1>

                                <p>“Travel is the main thing you purchase that makes you more extravagant”. We, at ‘Organization Name’, swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly</p>
                            </div>
                            <div className="footer_icon">
                                <ul>
                                    <li>
                                        <Link to='/coomsoon'>
                                            <FiInstagram />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/coomsoon'>
                                            <FiTwitter />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/coomsoon'>
                                            <FiFacebook />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/coomsoon'>
                                            <FiYoutube />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/coomsoon'>
                                            <FaWhatsapp />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer_heading">
                                <h1>Get In Touch</h1>
                            </div>
                            <div className="contact_info">
                                <ul>
                                    <li>
                                        <span><GoLocation /></span>
                                        123 Street, New York, USA
                                    </li>
                                    <li>
                                        <span><FiPhoneCall /></span>
                                        +012 345 67890
                                    </li>
                                    <li>
                                        <span><BiEnvelope /></span>
                                        info@travelpro.com
                                    </li>
                                    <li>
                                        <span><BiTimeFive /></span>
                                        Mon-Sun 9am-10pm
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer_heading">
                                <h1>Useful links</h1>
                            </div>
                            <div className="links">
                                <ul>
                                    <li>
                                        <Link to='/coomsoon'>
                                            New Destination
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/allpackage'>
                                            All Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/coomsoon'>
                                            Holiday package
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/coomsoon'>
                                            Family Package
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer_heading">
                                <h1 className='text-center'>Gallery</h1>
                            </div>
                            <div className="gallery">
                                <Row>
                                    <div className="col-lg-4 mb-4">
                                        <img className='img-fluid w-100' src={img1} alt="" />
                                    </div>
                                    <div className="col-lg-4">
                                        <img className='img-fluid w-100' src={img2} alt="" />
                                    </div>
                                    <div className="col-lg-4">
                                        <img className='img-fluid w-100' src={img3} alt="" />
                                    </div>
                                    <div className="col-lg-4">
                                        <img className='img-fluid w-100' src={img4} alt="" />
                                    </div>
                                    <div className="col-lg-4">
                                        <img className='img-fluid w-100' src={img5} alt="" />
                                    </div>
                                    <div className="col-lg-4">
                                        <img className='img-fluid w-100' src={img6} alt="" />
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
            <div class="footer_bottom text-center">
                <Container>
                    <p>Copyright 2021 TravelPro | Design By Nannu</p>
                </Container>
            </div>
        </div>
    );
};

export default Footer;