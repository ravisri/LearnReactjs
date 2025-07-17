import React from "react";
import { Navigate } from 'react-router-dom'


const PrivateRoute = ({children}) =>{
    const token = localStorage.getItem('token');

    if(!token){
        return <Navigate to='/login' replace/>
    }

    // Logged in, allow access
    return children
}

export default PrivateRoute