import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import MyBooked from '../MyBooked/MyBooked';

const MyBooking = () => {
    const [logeduser, setLogedUser] = useState([]);


    useEffect(() => {
        fetch('https://ancient-lake-93961.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setLogedUser(data))
    }, [])

    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <div className="col-lg-12">
                        <div style={{ 'marginTop': '30px' }} className="my_boking text-center">
                            <h1>My Boked Item</h1>
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