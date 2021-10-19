import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    console.log(user)
    console.log(isLoading)
    if (isLoading) {
        alert('i m loadong..')
        return <Spinner animation="border" variant="primary" />
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