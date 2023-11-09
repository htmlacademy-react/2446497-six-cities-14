import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { nearby } from './mocks/nearby';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} reviews={reviews} nearby={nearby} />
    </Provider>
  </React.StrictMode>
);
