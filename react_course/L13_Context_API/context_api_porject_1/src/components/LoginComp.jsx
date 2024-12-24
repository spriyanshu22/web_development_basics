import React from 'react'
import UserContext from '../context/userContext'
import { useNavigate } from 'react-router'


function LoginComp() {
    const navigate = useNavigate()
    // const router = useParams()
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')


    // no need to fetch user variable as here we only have to setUser value
    const {user,setUser} = React.useContext(UserContext)

    const handleSubmit = (e) => {
        setUser({username:username, password:password})
        
        console.log("User: ", user) 

        // altert that user has been set else altert that user has not been set
        if (username && password) {
            console.log(`User has been set with username: ${username} and password: ${password}`)
        } else {
            console.log('User has not been set')
        }

        // ***  navigate to user page after setting user ***
        navigate('/user')
    }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form
            onSubmit = {(e) => {
                e.preventDefault()
                handleSubmit()
            }
            }
        >
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
            </label>
            <input
                type="text"
                id="username"
                value = {username? username : ''}
                onChange = {(e) => setUsername(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your username"
            />
            </div>
            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input
                type="password"
                id="password"
                value = {password? password : ''}
                onChange = {(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
            />
            </div>
            <div className="flex items-center justify-between">
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Login
            </button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default LoginComp