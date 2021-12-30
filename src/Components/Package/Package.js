import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Package.css';

const Package = (props) => {
    const { _id } = props?.packaged;
    return (
        <div className="col-lg-4 package_page">
            <Card style={{ 'borderRadius': '10px' }} className='mt-5 round'>
                <Card.Img variant="top" src={props?.packaged?.img} />
                <Card.Body>
                    <Card.Title className='card_title'>
                        <p>{props?.packaged?.date}</p>
                    </Card.Title>
                    <Card.Text className='card_text'>
                        <p>{props?.packaged?.des}</p>
                    </Card.Text>
                    <div className="card_dis d-flex justify-content-between">
                        <div>
                            <Link to={`booknow/${_id}`}>
                                <button className='card_btn'>Book Now</button>
                            </Link>
                        </div>
                        <div className="card_pri">
                            <h4>{props?.packaged?.price}</h4>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Package;