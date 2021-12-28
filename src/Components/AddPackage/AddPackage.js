import axios from 'axios';
import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log(data);

        axios.post('http://localhost:5000/packages', data)
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
        <div style={{ 'marginTop': '90px', }} >
            <Container>
                <Row>
                    <div className="col-lg-12 d-flex justify-content-center">
                        <div className="booking text-center">

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("key", { required: true, maxLength: 20 })} placeholder='Give A Unique Key' />

                                <input {...register("img")} placeholder='img Url' />

                                <input {...register("date")} placeholder='0 Days &amp; 0 Night' />

                                <textarea type="text" {...register("des")} placeholder='Description' />

                                <input  {...register("price")} placeholder='$99.00' />

                                <input type="submit" />
                            </form>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default AddPackage;