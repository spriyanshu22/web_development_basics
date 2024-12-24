import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [jokes, setJokes] = useState([])

  // get the jokes from the backend
  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return (
    <>
      <h1>Welcome to Frontend</h1>
      
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke, index) => {
          return (
            <div key={index}>
              <h2>{joke.title}</h2>
              <p>{joke.body}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default App
