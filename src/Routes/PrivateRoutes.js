import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoutes = ({children}) => {
    const { user,loader, setLoader }=useContext(AuthContext)

    const location = useLocation();
    if (loader) {
        return <h1> loading..</h1>;
    }

    if(!user){
        return <Navigate to ="/login" state ={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoutes;