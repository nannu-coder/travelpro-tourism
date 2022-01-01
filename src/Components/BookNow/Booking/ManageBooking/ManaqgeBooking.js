import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import ManageAllBooking from '../ManageAllBooking/ManageAllBooking';
import MyBooking from '../MyBooking/MyBooking';
import './ManageBooking.css';

const ManaqgeBooking = (props) => {
    const [booking, setBooking] = useState();

    useEffect(() => {
        fetch('https://ancient-lake-93961.herokuapp.com/booking/')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    <div className="manage_all">
                        <div className="heading">
                            <h1>View All Booking</h1>
                        </div>
                    </div>
                    {
                        booking?.map(booked => <ManageAllBooking
                            key={booked._id}
                            booked={booked}></ManageAllBooking>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManaqgeBooking;