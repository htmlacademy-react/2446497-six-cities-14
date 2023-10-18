import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import { AppRoute, AuthorizationStatus } from './const';
import Login from './pages/login/login';
import Favorites from './pages/favorites/favorites';
import Offer from './pages/offer/offer';
import Error from './pages/404/404';
import PrivateRoute from './components/private-route/private-route';

type AppProps = {
  placesCount: number;
};

export default function App({ placesCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Home placesCount={placesCount} />}></Route>
        <Route path={AppRoute.Login} element={<Login />}></Route>
        <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><Favorites/></PrivateRoute>}></Route>
        <Route path={AppRoute.Offer} element={<Offer />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
