import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowAllPackage = (props) => {
    return (
        <>
            <div className="col-lg-4 package_page">
                <Card>
                    <Card.Img variant="top" src={props?.packaged?.img} />
                    <Card.Body>
                        <Card.Title>{props?.packaged?.date}</Card.Title>
                        <Card.Text>
                            {props?.packaged?.des}
                        </Card.Text>
                        <Link to={`booknow/`}>
                            <button>Book Now</button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default ShowAllPackage;