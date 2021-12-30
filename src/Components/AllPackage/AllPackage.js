import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowAllPackage from './ShowAllPackage/ShowAllPackage';

const AllPackage = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    <div style={{ 'marginTop': '80px' }} className="packages">
                        <Row>
                            <div className="col-lg-12 text-center">
                                <div className="packages_heading">
                                    <h1>All Tour Packages</h1>
                                    <p>Worldexpeditions offer a variety of authentic adventures from multi-day treks and cultural journeys to cycle journeys and mountaineering expeditions. It holds an outstanding brand name for providing awesome services for cultural trips.</p>
                                </div>
                            </div>
                        </Row>
                    </div>
                    {
                        packages.map((packaged) => <ShowAllPackage
                            key={packaged._id}
                            packaged={packaged}
                        ></ShowAllPackage>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllPackage;