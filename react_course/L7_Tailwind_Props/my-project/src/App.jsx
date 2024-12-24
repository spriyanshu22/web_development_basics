import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black'>Tailwind Css </h1>

      <Card username="priya" rank="1" price="1L"/>
      <Card username="lucky" rank="2" price="2L"/>
    </>
  )
}

export default App
