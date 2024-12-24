import React, { useState } from "react";
import UserContext from "./userContext";

// basically what we are doing here is that whatever component we wrap with this UserContextProvider will have access to the context that we are providing here
// And with the help of this context, we can share the data among all the components that are wrapped with this UserContextProvider
const UserContextProvider = ({children}) => {
    // actuall user will be set to an object that will have all the user details from the input form
    const [user, setUser] = useState({username:"John Doe",password:"password"});

    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
};

export default UserContextProvider;