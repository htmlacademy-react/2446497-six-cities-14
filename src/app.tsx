import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import { AppRoute, AuthorizationStatus } from './const';
import Login from './pages/login/login';
import Favorites from './pages/favorites/favorites';
import Offer from './pages/offer/offer';
import Error from './pages/404/404';
import PrivateRoute from './components/private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/layout';
import { Offers } from './types/offers';
import { Reviews } from './types/reviews';

type AppProps = {
  placesCount: number;
  offers: Offers;
  reviews: Reviews;
};

export default function App({ placesCount, offers, reviews }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Layout />}>
            <Route index element={<Home placesCount={placesCount} offers={offers} />}></Route>
            <Route path={AppRoute.Login} element={<Login />}></Route>
            <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><Favorites offers={offers} /></PrivateRoute>}></Route>
            <Route path={AppRoute.Offer} element={<Offer offers={offers} reviews={reviews} />}></Route>
          </Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
