import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Authcontext from '../Store/Authcontext';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const authctx=useContext(Authcontext)
  const enteredpassword=useRef();
  const history=useHistory();
  const submithandler=()=>{
    const newpassword=enteredpassword.current.value;
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDCR5rUw0Y_wizK-phDVLRRJ7mQ2qYxa0g",
    {
      method:'POST',
      body:JSON.stringify({
        idToken:authctx.token,
        password:newpassword,
        returnSecureToken:false,
      }),
      headers:{
        "Content-type":"application/json"
      }
    }).then((res)=>{
      history.replace("/")

    })
  }
  return (
    <form className={classes.form} onSubmit={submithandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password'ref={enteredpassword} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
