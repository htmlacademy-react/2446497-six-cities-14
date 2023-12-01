import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';

import App from './app';
import { withHistory, withStore } from './mocks/mock-component';
import { makeFakeStore, makeFakeUserInfo } from './mocks/mocks';
import { AppRoute, AuthorizationStatus } from './const';

describe('Routing: is app routing correct', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "Home" when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push(AppRoute.Main);

    render(withStoreComponent);

    expect(screen.getByText('Cities')).toBeInTheDocument();
  });

  it('should render "Login" when user navigate to "/login"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push(AppRoute.Login);

    render(withStoreComponent);

    expect(screen.getByText('E-mail')).toBeInTheDocument();
  });

  it('should render "Favorites" when user navigate to "/favorites"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore({
        USER: { authorizationStatus: AuthorizationStatus.Auth, user: makeFakeUserInfo() },
      })
    );
    mockHistory.push(AppRoute.Favorites);

    render(withStoreComponent);

    expect(screen.getByText('Favorites offers')).toBeInTheDocument();
  });

  it('should render "Error" when user navigate to non-existent route', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    const unknownRoute = '/unknown-route';
    mockHistory.push(unknownRoute);

    render(withStoreComponent);

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
  });
});
