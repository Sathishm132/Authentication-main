import React, { useState } from 'react'

const Authcontext=React.createContext({
    token:"",
    islogin:false,
    login:(token)=>{},
    logout:()=>{}
})
export const Authcontextprovider=(props)=>{
    const initialtoken=localStorage.getItem('token')
    const[token,setToken]=useState(initialtoken);
    const userisLogin = !!token;
    const loginhandler=(token)=>{
        setToken(token);
        localStorage.setItem('token',token)
    }
    const logouthandler=()=>{
        setToken(null);
        localStorage.removeItem('token')
    }
    const contextvalue={
        token:token,
        isLogin:userisLogin,
        login:loginhandler,
        logout:logouthandler,
    }
    return<Authcontext.Provider value={contextvalue}>{props.children}</Authcontext.Provider>

}
export default Authcontext;