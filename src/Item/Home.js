import TodoList from './TodoList'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import NavBar from '../component/NavBar'

function Home() {
    const navigate = useNavigate()

    useEffect(() => {
        //if (!status) navigate('/')
    })

    return <NavBar />
}

export default Home
