import React, { createContext, useState } from 'react';

export const MyContext = createContext({})

export const AuthContext = ({ children }) => {

    let [user, setUser] = useState({
        name: "Gustavo"
    });

    const handleUserName = e => {
        setUser({
            name: e.target.value
        });
    }

    return(
        <MyContext.Provider value={{ user, handleUserName }}>
            {children}
        </MyContext.Provider>
    )
}