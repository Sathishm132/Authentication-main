import React, { useState } from 'react'

const Authcontext=React.createContext({
    token:"",
    islogin:false,
    login:(token)=>{},
    logout:()=>{}
})
export const Authcontextprovider=(props)=>{
    const[token,setToken]=useState(null);
    const userisLogin = !!token;
    const loginhandler=(token)=>{
        setToken(token);
        console.log(token)
    }
    const logouthandler=()=>{
        setToken(null);
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