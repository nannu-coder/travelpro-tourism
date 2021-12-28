import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';
import './MyBooked.css';

const MyBooked = (props) => {
    const { user } = useAuth();
    const [packags, setPackages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/packages/')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    const details = packags.find((packaged) => packaged._id == props?.bookingUser?.bookingID);


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
                        const remainingUser = details.filter(detail => props?.bookingUser?.bookingID !== detail?._id)

                        setPackages(remainingUser);
                    }

                })
        }
    }


    return (
        <>
            {
                props?.bookingUser?.LogedinUser === user.email ? <div className="col-lg-4">
                    <Card className='mt-5'>
                        <Card.Img variant="top" src={details?.img} />
                        <Card.Body>
                            <Card.Title>{details?.date}</Card.Title>
                            <Card.Text>
                                {details?.des}
                            </Card.Text>
                            <button onClick={() => handleDelete(props.bookingUser?._id)} className='pkg-btn'>Cancel</button>
                        </Card.Body>
                    </Card>
                </div> : null
            }
        </>
    );
};

export default MyBooked;