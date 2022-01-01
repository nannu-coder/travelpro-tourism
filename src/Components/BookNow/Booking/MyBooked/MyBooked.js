import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';
import './MyBooked.css';

const MyBooked = (props) => {
    const { user } = useAuth();
    const [packags, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://ancient-lake-93961.herokuapp.com/packages/')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    const details = packags.find((packaged) => packaged._id == props?.bookingUser?.bookingID);


    const handleDelete = id => {
        const sure = window.confirm("are you sure to delete?")
        if (sure) {
            const url = (`https://ancient-lake-93961.herokuapp.com/booking/${id}`)
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
                    <Card style={{ 'borderRadius': '10px' }} className='mt-5'>
                        <Card.Img variant="top" src={details?.img} />
                        <Card.Body>
                            <Card.Title className='card_title'>
                                <p>{details?.date}</p>
                            </Card.Title>
                            <Card.Text className='card_text'>
                                <p>{details?.des}</p>
                            </Card.Text>
                            <div className="card_dis d-flex justify-content-between">
                                <div>
                                    <button onClick={() => handleDelete(props.bookingUser?._id)} className='pkg-btn'>Cancel</button>
                                </div>
                                <div className="card_pri">
                                    <h4>{details?.price}</h4>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div> : null
            }
            {/* {
                props?.bookingUser?.LogedinUser === user.email && null ? <h1></h1> :  
            } */}
        </>
    );
};

export default MyBooked;