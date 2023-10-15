import React from 'react';
import Card from './Card';
import Sort from './Sort';

export default function Places() {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>
      <Sort />
      <div className="cities__places-list places__list tabs__content">
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </section>
  );
}
