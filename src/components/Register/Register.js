import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import facebook from '../../image/icon/facebook.png';
import github from '../../image/icon/github.png';
import google from '../../image/icon/google.png';


const Register = () => {
    const { handleName, handleEmail, handlePassword, handleRegister,error } = useAuth();
    return (
        <Container>
            <div className='w-50 mx-auto my-4'>
                <div className='form-content'>
                    <div className='text-center'>
                        <img style={{ width: '50px' }} src='favicon.ico' alt="" />
                        <h2 className='my-2 mb-4 text-muted'>Register</h2>
                    </div>
                    <form onSubmit={handleRegister}>
                        <div className="form-floating mb-3">
                            <input type="name" onBlur={handleName} className="form-control" id="floatingName" placeholder="name@example.com" required />
                            <label htmlFor="floatingName">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" onBlur={handleEmail} className="form-control" id="floatingInput" placeholder="name@example.com" required />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" onBlur={handlePassword} className="form-control" id="floatingPassword" placeholder="Password" required />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" onBlur={handlePassword} className="form-control" id="floatingRePassword" placeholder="Re-type Password" required />
                            <label htmlFor="floatingRePassword">Re-type Password</label>
                        </div>
                        <p className='text-danger'><small>{error}</small></p>
                        <input type="submit" value='Submit' className='btn-form' />
                    </form>
                    <br />
                    <h5 className='text-center'>______or______</h5>
                    <p className='text-left text-muted'>have an account? <Link to='/login'>Log in</Link></p>
                    <div className='d-flex justify-content-center'>
                        <button className='login-icon'><img src={google} alt="" /></button>
                        <button className='login-icon'><img src={facebook} alt="" /></button>
                        <button className='login-icon'><img src={github} alt="" /></button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Register;