import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import facebook from '../../image/icon/facebook.png';
import github from '../../image/icon/github.png';
import google from '../../image/icon/google.png';
import './Login.css';


const Login = () => {
    const { googleSign,githubSign, facebookSign, handleLogin, handleEmail, handlePassword, error, setError, setUser,isLoad,setIsLoad } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_ui = location.state?.from || '/home';
    console.log(isLoad)
    //google
    const handleGoogleSignin = () => {
        setIsLoad(true)
        googleSign()
        .then(result => {
            setUser(result.user);
            history.push(redirect_ui);
        }).catch(err => {
            setError(err.message)
        }).finally(()=> setIsLoad(false))
    }

    //facebook
    const handleFacebookSignin = () => {
        setIsLoad(true)
        facebookSign()
            .then(result => {
                setUser(result.user);
                history.push(redirect_ui);
            }).catch(err => {
                setError(err.message)
            }).finally(() => setIsLoad(false))
    }

    //github
    const handleGithubSignin = () => {
        setIsLoad(true)
        githubSign()
            .then(result => {
                setUser(result.user);
                history.push(redirect_ui);
            }).catch(err => {
                setError(err.message)
            }).finally(() => setIsLoad(false))
    }

    //login
    const handleUseingLogin = (e) => {
        e.preventDefault();
            handleLogin()
            .then(result => {
                setUser(result.user)
                history.push(redirect_ui);
                setError('');
            }).catch(err => {
                setError(err.message)
            })
    }
    return (
        <Container>
            <div className='row my-2 mx-auto'>
                <div className='col-md-6 col-12 form-content'>
                    <div className='text-center'>
                        <img style={{ width: '50px' }} src='favicon.ico' alt="" />
                        <h2 className='my-2 mb-4 text-muted'>Log In</h2>
                    </div>
                    <form onSubmit={handleUseingLogin}>
                        <div className="form-floating mb-3">
                            <input type="email" onBlur={handleEmail} className="form-control" id="floatingInput" placeholder="name@example.com" required />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" onBlur={handlePassword} className="form-control" id="floatingPassword" placeholder="Password" required/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <p className='text-danger'><small>{error}</small></p>
                        <input type="submit" value='Log In' className='btn-form' />
                    </form>
                    <br />
                    <h5 className='text-center'>______or______</h5>
                    <p className='text-left text-muted'>create new account? <Link to='/register'>Register</Link></p>
              
                <div className='d-flex justify-content-center'>
                    <button onClick={handleGoogleSignin} className='login-icon'><img src={google} alt="" /></button>
                        <button onClick={handleFacebookSignin} className='login-icon'><img src={facebook} alt="" /></button>
                        <button onClick={handleGithubSignin} className='login-icon'><img src={github} alt="" /></button>
                    </div>
               </div>
            </div>
        </Container>
    );
};

export default Login;