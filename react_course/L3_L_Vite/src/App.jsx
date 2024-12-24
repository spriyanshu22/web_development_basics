// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Youtube  from './youtube.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>  
      <h1> 
        App.jsx called
      </h1>
      <Youtube />
    </>  // ##this div ensured  that the jsx code is returned as a single element
  )
}

export default App
