import logo from './logo.svg'
import './App.css'
import TodoList from './Item/TodoList'
import Home from './Item/Home'
import Login from './Item/Login'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function App() {
    const status = useSelector((state) => state.Login.isLogin)

    return (
        <div className="App">
            <Router>
                <div>
                    <div>Login Status：{status ? 'true' : 'false'}</div>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/Home" element={<Home />} />
                        <Route path="/TodoList" element={<TodoList />} />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default App
