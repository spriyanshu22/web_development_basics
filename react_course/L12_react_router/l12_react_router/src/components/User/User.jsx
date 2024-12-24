import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {username} = useParams()
  return (
    <div className=' mx-auto mt-10 flex justify-center items-center bg-gray-100 p-5'
    >
        <h1 className='text-2xl font-bold'
        >User: {username}</h1>
    </div>
  )
}

export default User