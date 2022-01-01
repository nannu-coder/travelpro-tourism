import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Package from '../Package/Package';
import './Packags.css';

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://ancient-lake-93961.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    <div className="packages mt-5">
                        <Row>
                            <div className="col-lg-9">
                                <div className="packages_heading">
                                    <h1>Popular Tour Packages</h1>
                                    <p>Worldexpeditions offer a variety of authentic adventures from multi-day treks and cultural journeys to cycle journeys and mountaineering expeditions. It holds an outstanding brand name for providing awesome services for cultural trips.</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <Link to='/allpackage'>
                                    <button className='pk-btn'>View All Tour</button>
                                </Link>
                            </div>
                        </Row>
                    </div>
                    {
                        packages.slice(0, 6).map((packaged) => <Package key={packaged._id} packaged={packaged}></Package>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Packages;