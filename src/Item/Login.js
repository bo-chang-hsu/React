import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, logout } from '../Slice/LoginSlice'

function Login(props) {
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        if (account === 'admin' && password === '12345') {
            dispatch(login(true))
        } else {
            alert('Password not correct or have this user')
        }

        setAccount('')
        setPassword('')

        navigate('/Home') //*跳轉
    }
    return (
        <form onSubmit={handleLogin}>
            Account：
            <input
                type="text"
                id="account"
                onChange={(e) => {
                    setAccount(e.target.value)
                }}
                value={account}
            />
            <br />
            PassWord：
            <input
                type="password"
                id="password"
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                value={password}
            />
            <br />
            <button>Login</button>
        </form>
    )
}

export default Login
