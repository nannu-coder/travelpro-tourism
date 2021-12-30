import React, { useEffect, useState } from 'react';
import { CardGroup, Card } from 'react-bootstrap';
import './ManageAllBooking.css';

const ManageAllBooking = (props) => {
    console.log(props);
    const [packages, setPackages] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/packages/')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    const details = packages.find((packaged) => packaged._id == props?.booked?.bookingID);


    const handleDelete = id => {
        const sure = window.confirm("are you sure to delete?")
        if (sure) {
            const url = (`http://localhost:5000/booking/${id}`)
            fetch(url, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Delete Successfully')
                    }

                })
        }
    }


    return (
        <div className="col-lg-4">
            <CardGroup>
                <Card style={{ 'borderRadius': '10px' }} className='booking'>
                    <Card.Img variant="top" src={details?.img} />
                    <Card.Body>
                        <Card.Title className='card_title'>
                            <p>{details?.date}</p>
                        </Card.Title>
                        <Card.Text className='card_text'>
                            <p>{details?.des}</p>
                        </Card.Text>
                        <div class="booker_info d-flex justify-content-between">
                            <div class="booker">
                                <h6>Name:</h6>
                                <h6>email:</h6>
                                <h6>Number:</h6>
                                <h6>Address:</h6>
                            </div>
                            <div class="info">
                                <h6>{props?.booked?.fieldData?.Name}</h6>
                                <h6>{props?.booked?.fieldData?.email}</h6>
                                <h6>{props?.booked?.fieldData?.Number}</h6>
                                <h6>{props?.booked?.fieldData?.Address}</h6>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <div className="card_dis d-flex justify-content-between">
                            <div>
                                <button onClick={() => handleDelete(props.booked?._id)} className='pkg-btn'>Cancel</button>
                            </div>
                            <div className="card_pri">
                                <h4>{details?.price}</h4>
                            </div>
                        </div>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default ManageAllBooking;