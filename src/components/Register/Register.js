import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import facebook from '../../image/icon/facebook.png';
import google from '../../image/icon/google.png';

const Register = () => {
    const { handleName, handleEmail, handlePassword, handleRegister,error } = useFirebase();
    return (
        <Container>
            <div className='d-flex justify-content-center align-items-center mt-3 mb-5 text-center'>
                <div className='form-content'>
                    <img style={{ width: '50px' }} src='favicon.ico' alt="" />
                    <h2 className='my-2'>Sign Up</h2>
                    <form onSubmit={handleRegister}>
                        <div className="form-floating mb-3">
                            <input type="name" onBlur={handleName} className="form-control" id="floatingName" placeholder="name@example.com" />
                            <label htmlFor="floatingName">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" onBlur={handleEmail} className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" onBlur={handlePassword} className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <p className='text-danger'><small>{error}</small></p>
                        <input type="submit" value='Sign Up' className='btn-form' />
                    </form>
                    <br />
                    <h6>or</h6>
                    <p className='text-left'>Have an account? <Link to='/login'>Sign In</Link></p>
                    <div className='d-flex'>
                        <div className='login-icon'><img src={google} alt="" /> Continue With Google</div>
                        <div className='login-icon'><img src={facebook} alt="" /> Continue With Facebook</div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Register;