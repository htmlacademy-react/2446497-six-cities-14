import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { Settings } from './const';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { Amsterdam } from './mocks/city';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App placesCount={Settings.placesCount} offers={offers} reviews={reviews} city={Amsterdam} />
  </React.StrictMode>
);
