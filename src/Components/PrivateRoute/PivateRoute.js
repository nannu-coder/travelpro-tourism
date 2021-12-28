import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: "/Login",
                        state: { from: location }
                    }}
                />
            )
            }
        />
    );
};

export default PivateRoute;