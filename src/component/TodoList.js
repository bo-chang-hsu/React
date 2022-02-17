import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodo] = useState([])

    const addTodo = (todo) => {
        if (!todo.text) return

        const newTodo = [todo, ...todos]
        setTodo(newTodo)
        console.log(todo, ...todos)
    }

    const handleDelete = (id) => {
        const newTodo = [...todos].filter((todo) => todo.id != id)
        setTodo(newTodo)
        console.log(id)
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodo((prev) => prev.map((item) => (item.id === todoId ? newValue : item)))
    }

    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} removeTodo={handleDelete} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList
