import { createContext, useState } from "react";

export const CurrentUserContext = createContext({});

export default function CurrentUserProvider({children}){
    const [user, setUser] = useState();

    const handleSetUser = (userData) => {
        setUser(userData);
    }

    return (
        <CurrentUserContext.Provider value={{ 
            user,
            handleSetUser
        }} >
            {children}
        </CurrentUserContext.Provider>
    )
}

export const CurrentUserConsumer = CurrentUserContext.Consumer;