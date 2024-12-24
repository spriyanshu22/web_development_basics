import {createContext, useContext}  from 'react'

export const ThemeContext = createContext({
    todos: [
        {
            id: 1,
            msg: "Learn React",
            isCompleted: false
        }
    ],
    addTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
    updateTodo: (id) => {},
})

export const ThemeProvider = ThemeContext.Provider

export function useTheme() {
    return useContext(ThemeContext)
}