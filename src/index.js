import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NotificationsProvider } from '@mantine/notifications';

ReactDOM.render(
  <React.StrictMode>
    <NotificationsProvider position='top-right' limit={3} zIndex={2077}>
      <App />
    </NotificationsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
