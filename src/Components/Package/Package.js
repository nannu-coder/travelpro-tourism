import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Package.css';

const Package = (props) => {
    const { _id } = props?.packaged;
    return (
        <div className="col-lg-4 package_page">
            <Card>
                <Card.Img variant="top" src={props?.packaged?.img} />
                <Card.Body>
                    <Card.Title>{props?.packaged?.date}</Card.Title>
                    <Card.Text>
                        {props?.packaged?.des}
                    </Card.Text>
                    <Link to={`booknow/${_id}`}>
                        <button>Book Now</button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Package;