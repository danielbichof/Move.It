import Head from 'next/head';
import { createContext, ReactNode, useContext, useState } from 'react';
import { Login } from '../components/Login'



interface LoginContextData {
    username: () => void;

}

interface LoginProviderProps {
    children: ReactNode;
}
    
export const LoginContext = createContext({} as LoginContextData);

export function LoginProvider({ 
    children, ...rest
}: LoginProviderProps ) {


    
    function username() {
        const username = document.querySelector('#inputUsername').value;
        console.log(`https://github.com/${username}.png`);
        console.log(username);
        
    }





    //completar o useState do username e tratar as informações
    return (
        <LoginContext.Provider
        value={{
            username
        }}>
            {children}
        </LoginContext.Provider>
   
    )
}