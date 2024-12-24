import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState(null)
    // useEffect(() => {
    //     fetch('https://api.github.com/users/spriyanshu22')
    //     .then(res => res.json())
    //     .then((jsonRes) => setData(jsonRes)) // Corrected this line to update state with fetched data

    //     console.log("Api Called")
    // },[])

    // ********* Now instead of using useEffect we can use LOADER concept *********
    // In this in the place where we set up the routing we can pass a function (that we will write here) to do the api call and then using useLoaderData hook we can take the data and display it
    const data = useLoaderData()
    
    // useEffect(() => {
    //     console.log("Data", data)
    // }, [data]) // Added dependency array to log data when it changes

  return (
    // now we will display followers and profile picture of the user
    <div className=' mx-auto mt-10 flex flex-col justify-center items-center bg-gray-100 p-5'
    >
        <h1 className='text-2xl font-bold'
        >Github</h1>
        <div className='flex justify-center items-center mt-5'>
            <img src={data?.avatar_url} alt="profile" className='h-20 w-20 rounded-full'/>
            <h1 className='text-2xl font-bold ml-5'>Followers: {data?.followers}</h1> {/* Updated this line */}
        </div>
    </div>

  )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/spriyanshu22')
    const data = await res.json()
    return data
}