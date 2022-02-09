import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth ({ children}) {
    let location = useLocation();

    if (!localStorage.getItem('token')) {
        return <Navigate to="/login" state={{ from: location }} replace/>;
    }

    return children;
}
