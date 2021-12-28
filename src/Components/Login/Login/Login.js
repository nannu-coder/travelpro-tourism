import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
import google from '../../../Images/google.png'
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { googleSignIn } = useAuth();
    return (
        <div>
            <Container>
                <Row>
                    <div className="col-lg-12 d-flex justify-content-center">
                        <div className="login-form">
                            <div className="google-login text-center">
                                <h5>Login With Google</h5>
                                <button onClick={googleSignIn}> <img src={google} alt="" /> <p>Continue With Google</p> </button>
                                <p>Don't Have an Account? <Link to='/coomsoon'>Create Account</Link> </p>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Login;