import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { Authcontextprovider } from './components/Store/Authcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Authcontextprovider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Authcontextprovider>
);
