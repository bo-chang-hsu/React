import logo from './logo.svg'
import './App.css'
import TodoList from './Item/TodoList'
import Home from './Item/Home'
import Login from './Item/Login'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import PrivateRoute from './component/PrivateRoute'
import useToken from './Item/useToken'

function App({ auth, doLogin, doLogout }) {
    const { token, setToken } = useToken()
    return (
        <div className="App">
            <Router>
                {!token ? (
                    <Login setToken={setToken} />
                ) : (
                    <div>
                        <div>Login Status：{token}</div>
                        <Routes>
                            <Route path="/" element={<Login setToken={setToken} />} />
                            <Route path="/Home" element={<PrivateRoute Component={Home} />} />

                            <PrivateRoute path="/TodoList" element={<TodoList />} />
                            <Route component={() => <div>No such page!</div>} />
                        </Routes>
                    </div>
                )}
            </Router>
        </div>
    )
}

export default App
