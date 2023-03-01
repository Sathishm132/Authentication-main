import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Authcontext from '../Store/Authcontext';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authcntx=useContext(Authcontext);
  const islogin=authcntx.isLogin;
  const history=useHistory()
  const logouthandler=()=>{
    authcntx.logout()
    history.replace("auth")
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!islogin&& <li>
            <Link to='/auth'>Login</Link>
          </li>}
         {islogin&&<li>
            <Link to='/profile'>Profile</Link>
          </li>}
          {islogin&&(<li>
            <button onClick={logouthandler}>Logout</button>
          </li>)}
          
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
