import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { Settings } from './const';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { Amsterdam } from './mocks/city';
import { nearby } from './mocks/nearby';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App placesCount={Settings.placesCount} offers={offers} reviews={reviews} city={Amsterdam} nearby={nearby} />
    </Provider>
  </React.StrictMode>
);
