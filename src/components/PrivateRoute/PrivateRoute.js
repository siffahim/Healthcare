import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoad } = useAuth()
    console.log(user)
    console.log(isLoad)
    if (isLoad) {
        return <div className='text-center p-5'>
            <Spinner animation="grow" variant="dark" />
        </div>
    }
    return (
        <Route
            {...rest}
            render={({location}) => user.displayName ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            />}
        />
    );
};

export default PrivateRoute;