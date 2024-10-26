import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Auth0Provider
    domain="dev-k7ce3ygbp1z3443m.us.auth0.com"
    clientId="FaPZzMYrwGlj51LyMU313ZjaQ7p864wQ"
    authorizationParams={{
      redirect_uri: "https://blog-website-git-main-himansh-s-projects.vercel.app/home"
    }}
  >
    <App />
  </Auth0Provider>,
);
