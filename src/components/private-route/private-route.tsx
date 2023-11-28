import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/dispatch';
import { getAuthorizationStatus } from '../../store/authorization-data/selectors';

type PrivateRouteProps = {
  direction: AppRoute;
  children: JSX.Element;
};

export default function PrivateRoute({ children, direction }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return authorizationStatus === (direction === AppRoute.Login ? AuthorizationStatus.Auth : AuthorizationStatus.NoAuth) ? children : <Navigate to={direction} />;
}
