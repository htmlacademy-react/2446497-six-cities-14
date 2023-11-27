import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { AuthorizationStatusDataType } from './authorization-data';

export const getAuthorizationStatus = createSelector(
  (state: State) => state[NameSpace.User],
  (state: AuthorizationStatusDataType) => state.authorizationStatus
);

export const getUser = createSelector(
  (state: State) => state[NameSpace.User],
  (state: AuthorizationStatusDataType) => state.user
);
