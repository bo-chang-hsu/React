import { useState } from 'react'

export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token')
        const userToken = JSON.parse(tokenString)
        return !userToken ? false : userToken.isLogin
    }

    const [token, setToken] = useState(getToken())

    const saveToken = (userToken) => {
        sessionStorage.setItem('token', JSON.stringify(userToken))
        setToken(userToken.isLogin)
    }

    return {
        setToken: saveToken,
        token
    }
}