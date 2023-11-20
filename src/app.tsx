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
import { useAppSelector } from './hooks/dispatch';
import LoadingScreen from './pages/loading-screen/loading-screen';
import { useEffect } from 'react';
import { store } from './store';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';

export default function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.AuthorizationStatus);
  const isQuestionsDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  useEffect(() => {
    store.dispatch(fetchOffersAction());
    store.dispatch(checkAuthAction());
  }, []);

  if (authorizationStatus === AuthorizationStatus.Unknown || isQuestionsDataLoading) {
    return <LoadingScreen />;
  }
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path={AppRoute.Login} element={<Login />}></Route>
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute>
                  <Favorites />
                </PrivateRoute>
              }></Route>
            <Route path={AppRoute.Offer} element={<Offer />}></Route>
          </Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
