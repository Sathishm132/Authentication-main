import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const email=useRef();
  const password=useRef();
      
  const submithandler=(event)=>{
    event.preventDefault();
    const enteredemail=email.current.value;
    const  enteredpassword=password.current.value;
    console.log(enteredemail)
    let url;
    if(isLogin){
      url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDCR5rUw0Y_wizK-phDVLRRJ7mQ2qYxa0g"

    }else{
      url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDCR5rUw0Y_wizK-phDVLRRJ7mQ2qYxa0g"
  }
  fetch(url,
      {
      method:"POST",
      body:JSON.stringify({
        email:enteredemail,
        password:enteredpassword,
        returnSecureToken:true,
      }),
      headers:{
        "Content-type":"application/json"
      }
      }).then((res)=>{
        if(res.ok){
          return res.json()

        }else{
          return res.json().then((data)=>{
            let Errormessage="Authentication failed";
            // if(data&&data.error&&data.error.message){
            //   Errormessage=data.error.message
           // } 
           throw new Error(Errormessage) 
           
          })
        }
      }).then((dat)=>{}).catch((err)=>{
        alert(err.message)


      })
    }


  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submithandler} >
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={email} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={password}
          />
        </div>
        <div className={classes.actions}>
          <button type='submit'>{isLogin?"login":"createaccount"}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
