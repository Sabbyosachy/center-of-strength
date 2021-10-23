import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

//Private Route set 

const PrivateRoute = ({children, ...rest}) => {
    const {user,isLoading} = useAuth();
    if(isLoading){
        return <h1 className="text-red-600 text-center font-medium pb-5">Loading.........</h1>;
     
    }
    return (
        <div>
            <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>

            }
        >

        </Route>
        </div>
    );
};

export default PrivateRoute;