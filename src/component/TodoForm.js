import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')
    const previousInput = useRef('')
    //const renderCount = useRef(0)

    const inputRef = useRef(null)

    useEffect(() => {
        //renderCount.current += 1
        inputRef.current.focus()
        previousInput.current = input
    }, [input])

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('')
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleFocus = () => {
        inputRef.current.focus()
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* <p>Render Count:{renderCount.current}</p> */}
            {props.edit ? (
                <>
                    <input placeholder="Update your item" value={input} onChange={handleChange} name="text" ref={inputRef} />
                    <button onClick={handleSubmit}>Update</button>
                </>
            ) : (
                <>
                    <input placeholder="Add a todo" value={input} onChange={handleChange} name="text" ref={inputRef} />
                    <button onClick={handleSubmit}>Add todo</button>
                    priviousValue: {previousInput.current}
                    {/* <button onClick={handleFocus}>focus</button> */}
                </>
            )}
        </form>
    )
}

export default TodoForm
