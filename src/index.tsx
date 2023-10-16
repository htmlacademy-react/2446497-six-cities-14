import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Settings = {
  placesCount: 213,
} as const;

root.render(
  <React.StrictMode>
    <App placesCount={Settings.placesCount} />
  </React.StrictMode>
);
