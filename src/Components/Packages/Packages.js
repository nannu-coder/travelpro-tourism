import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Package from '../Package/Package';

const Packages = () => {
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
                    <div className="packages">
                        <div className="packages_heading">
                            <h1>Popular Tour Package</h1>
                        </div>
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