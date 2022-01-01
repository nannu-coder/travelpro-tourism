import axios from 'axios';
import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './BookNow.css';

const BookNow = () => {
    const { bookId } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        const allData = { fieldData: data };
        allData['LogedinUser'] = user.email;
        allData['bookingID'] = bookId;

        axios.post('https://ancient-lake-93961.herokuapp.com/booking', allData)
            .then(res => {
                console.log(res)
                console.log(res.data);
                if (res.data.insertedId) {
                    alert('succesFully Booked')
                    reset();
                }
            }).catch((error) => {
                console.log(error);
            })
    };

    return (
        <div style={{ 'marginTop': '120px', }} >
            <Container>
                <Row>
                    <div className="col-lg-12 d-flex justify-content-center">
                        <div className="booking text-center">

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("Name", { required: true, maxLength: 20 })} placeholder='Full Name' />

                                <input {...register("Address")} placeholder='Current Address' />

                                <input type='email' {...register("email")} placeholder='Email' />

                                <input type="Number" {...register("Number")} placeholder='Phone number' />

                                <input className='btn_sub' type="submit" />
                            </form>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default BookNow;