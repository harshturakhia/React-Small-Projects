import React, { useState } from 'react'

import UserContext from './UserContext'

// Created context is fetched here and provider is then created 
const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider