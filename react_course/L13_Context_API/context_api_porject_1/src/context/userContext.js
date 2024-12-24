import React from "react";

// Creating a context, this will be the context that will be shared among all the components
// Note that this is context and not the variable that will be shared, rather that variable will be shared among all the components with this context
const UserContext = React.createContext();

export default UserContext;