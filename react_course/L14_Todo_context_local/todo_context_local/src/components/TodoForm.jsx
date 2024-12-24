import React, { useState } from 'react'
import { useTheme } from '../context/theme'

function TodoForm() {

    const [todoMsg, setTodoMsg] = useState(''); 
    
    const {addTodo} = useTheme()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!todoMsg) {
            alert('Please write something...')
            return
        }
        
        addTodo(todoMsg)
        setTodoMsg('') 
    }
  
    return (
        <form  
            onSubmit={handleSubmit}
            className="flex"
        >
            <input
                type="text"
                placeholder="Write Todo..."
                value={todoMsg}
                onChange={((e) => setTodoMsg(e.target.value))}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    )
}

export default TodoForm