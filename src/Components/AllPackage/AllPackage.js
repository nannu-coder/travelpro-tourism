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
                    <div className="packages">
                        <div className="packages_heading">
                            <h1>Popular Tour Package</h1>
                        </div>
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