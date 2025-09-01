import { Children, createContext,useContext } from "react";
import { useState } from "react";

const AuthContext = createContext();


const AuthProvider = ({children}) =>{
    const [user , setUser] = usestate(
        JSON.parse(localStorage.getItem("user")) || null
    );
}
    const login = (userData) =>{
       setUser(userData) 
    }

        return(
            <AuthContext.Provider value={{user , login, logout}}>
                {children}
            </AuthContext.Provider>
        )


