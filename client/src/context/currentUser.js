import { createContext, useState } from "react";

export const CurrentUserContext = createContext({});

export default function CurrentUserProvider({children}){
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    const handleLogin = (isLogIn) => {
        setLoggedIn(isLogIn);
    }

    const handleSetUser = (userData) => {
        setUser(userData);
    }

    return (
        <CurrentUserContext.Provider value={{ 
            user, 
            handleSetUser, 
            loggedIn,
            handleLogin
        }} >
            {children}
        </CurrentUserContext.Provider>
    )
}

export const CurrentUserConsumer = CurrentUserContext.Consumer;