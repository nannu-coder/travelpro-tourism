import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import MyBooked from '../MyBooked/MyBooked';

const MyBooking = () => {
    const [logeduser, setLogedUser] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setLogedUser(data))
    }, [])

    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <div className="col-lg-12">
                        <div className="my_boking text-center">
                            <h1>My Boking</h1>
                            <div className="col-lg-12">

                            </div>
                        </div>
                    </div>
                    {
                        logeduser.map((bookingUser) => <MyBooked
                            key={bookingUser._id}
                            bookingUser={bookingUser}></MyBooked>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MyBooking;