import React from 'react'
import { Route, Navigate } from 'react-router-dom'

function PrivateRoute(Component) {
    const auth = false //your logic

    return auth ? <Component /> : <Navigate to="/login" />
}

export default PrivateRoute
