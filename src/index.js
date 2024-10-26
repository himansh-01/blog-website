import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Auth0Provider
    domain="dev-dqmlv3apl1dq3uvy.us.auth0.com"
    clientId="dFu49kNuYIMdt2fwUrPPHkPVP0Pl8B9L"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);
