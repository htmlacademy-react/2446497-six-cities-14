import { Fragment } from 'react';
import Header from '../header/header';
import { Outlet } from 'react-router-dom';

export default function Layout(): JSX.Element {
  return (
    <Fragment>
      <Header />
      <main className='page__main'>
        <Outlet />
      </main>
    </Fragment>
  );
}
