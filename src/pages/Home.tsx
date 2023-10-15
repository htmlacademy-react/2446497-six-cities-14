import React from 'react';
import Header from '../components/Header';
import Map from '../components/Map';
import Places from '../components/Places';
import Tabs from '../components/Tabs';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          <div className="cities__places-container container">
            <Places />
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
