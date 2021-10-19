import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import facebook from '../../image/icon/facebook.png';
import google from '../../image/icon/google.png';
import './Login.css';

const Login = () => {
    const { googleSign, facebookSign,handleLogin,handleEmail,handlePassword,error } = useFirebase();
    return (
        <Container>
            <div className='d-flex justify-content-center align-items-center mt-3 mb-5 text-center'>
                <div className='form-content'>
                    <img style={{width:'50px'}} src='favicon.ico' alt="" />
                    <h2>Sign In</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-floating mb-3">
                            <input type="email" onBlur={handleEmail} className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" onBlur={handlePassword} className="form-control" id="floatingPassword" placeholder="Password"/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <p className='text-danger'><small>{error}</small></p>
                        <input type="submit" value='Sign In' className='btn-form' />
                    </form>
                    <br />
                    <h6>or</h6>
                    <p className='text-left'>Create new Account? <Link to='/register'>Sign Up</Link></p>
                    <div className='d-flex'>
                        <div onClick={googleSign} className='login-icon'><img src={google} alt="" /> Continue With Google</div>
                        <div onClick={facebookSign} className='login-icon'><img src={facebook} alt="" /> Continue With Facebook</div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;