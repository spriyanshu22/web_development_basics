import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { ThemeProvider } from './context/theme';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]); 

  const addTodo = (todoMsg) => { 
    setTodos([...todos, {msg:todoMsg, id: Date.now(), isCompleted: false}])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const updateTodo = (id, newMsg) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, msg: newMsg} : todo)); // Fix map method
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo)); // Fix map method
  }

  useEffect(() => {
    const todos = localStorage.getItem('todos');
    if(todos && todos.length) {
      console.log("fetching from local storage", todos);
      setTodos(JSON.parse(todos));
    }
  },[])
  
  useEffect(() => {
    if(todos && todos.length) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  },[todos])

  return (
    <ThemeProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#656667] min-h-screen py-8">
          <div className="w-full max-w-2xl bg-[#172842] mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  <TodoForm />
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                  ))}
              </div>
          </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
