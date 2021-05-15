import { createContext, useState } from "react";

export const CurrentUserContext = createContext({});

export default function CurrentUserProvider({children}){
    const [user, setUser] = useState();

    const handleSetUser = (userData) => {
        console.log('setting the user');
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