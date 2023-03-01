import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Authcontext from '../Store/Authcontext';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authcntx=useContext(Authcontext);
  const islogin=authcntx.islogin;
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
            <button>Logout</button>
          </li>)}
          
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
