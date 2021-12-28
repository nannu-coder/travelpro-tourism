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
                <Card className='booking'>
                    <Card.Img variant="top" src={details?.img} />
                    <Card.Body>
                        <Card.Title>{details?.date}</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <button onClick={() => handleDelete(props.booked?._id)} className='pkg-btn'>Cancel</button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default ManageAllBooking;