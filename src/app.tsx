import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import { AppRoute, AuthorizationStatus, LoadingDataStatus } from './const';
import Login from './pages/login/login';
import Favorites from './pages/favorites/favorites';
import Offer from './pages/offer/offer';
import Error from './pages/404/404';
import PrivateRoute from './components/private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/layout';
import { useAppSelector } from './hooks/dispatch';
import LoadingScreen from './pages/loading-screen/loading-screen';
import { useEffect } from 'react';
import { store } from './store';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';
import { getOffersLoadingStatus } from './store/offers-data/selectors';
import { getAuthorizationStatus } from './store/authorization-data/selectors';

export default function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(getOffersLoadingStatus);

  useEffect(() => {
    store.dispatch(fetchOffersAction());
    store.dispatch(checkAuthAction());
  }, []);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading === LoadingDataStatus.Pending) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path={AppRoute.Login} element={ <PrivateRoute direction={AppRoute.Main}><Login /></PrivateRoute>}></Route>
            <Route path={AppRoute.Favorites} element={ <PrivateRoute direction={AppRoute.Login}><Favorites /></PrivateRoute>}></Route>
            <Route path={AppRoute.Offer} element={<Offer />}></Route>
          </Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
