import { Fragment } from 'react';
import Header from '../header/header';
import { Outlet } from 'react-router-dom';

export default function Layout(): JSX.Element {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
}
