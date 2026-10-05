import { createContext, useState } from "react";


export const MyAuth=createContext();

export const AuthProvider=({children})=>{
    const [registerUser, setRegisterUser] = useState([]);
    const [loggedUser ,setLoggedUser] = useState(null)
        return <MyAuth.Provider
         value={{registerUser, setRegisterUser 
            ,loggedUser ,setLoggedUser}}>
                {children}</MyAuth.Provider>
    }