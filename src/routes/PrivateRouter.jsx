import React, { use } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRouter = ({children}) => {
    const {user} = use(AuthContext)

    if(!user){
        <Navigate to='/signIn'></Navigate>
    }
    return children;
};

export default PrivateRouter;