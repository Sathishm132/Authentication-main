import { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import Authcontext from './components/Store/Authcontext';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  const authctx=useContext(Authcontext);
  const isLogin=authctx.islogin;
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/auth'>
          <AuthPage />
        </Route>
        {isLogin&&<Route path='/profile'>
          <UserProfile />
        </Route>}
      </Switch>
    </Layout>
  );
}

export default App;
