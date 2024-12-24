import React, { useEffect } from 'react'
import { useContext } from 'react'
import UserContext from '../context/userContext'

function UserDetails() {
    const {user} = useContext(UserContext);

return (
    <div className="mx-auto mt-10 flex justify-center items-center bg-gray-100 p-5">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-sm text-center">
                    <h1 className="text-2xl font-bold mb-4 text-black">User Profile</h1>
                    <p className="text-lg text-black">Username: <span className="font-semibold text-black">{user.username}</span></p>
            </div>
    </div>
)
}

export default UserDetails