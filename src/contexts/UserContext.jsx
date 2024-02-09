import { createContext, useState,} from "react";


const UserContext = createContext()

export default function UserProvider({ children }) {

    const [user, setUser] = useState({ username: '', token: '', followed: '' })

    function updateUser({ username, token, followed }) {
        setUser({ username, token, followed })
    }

    function logoutUser(){
        setUser({followed:{}})
    }

    function updateLocalStorage(){
        localStorage.setItem('user', JSON.stringify(user))
    }

    const values = {
        user,
        updateUser,
        logoutUser,
        updateLocalStorage
    }

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}

export {
    UserContext
}